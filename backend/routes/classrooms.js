
const express = require("express");
const crypto = require("crypto");
const prisma = require("../prisma");
const authMiddleware = require("../middleware/auth");
const nodemailer = require("nodemailer");

const router = express.Router();

router.use(authMiddleware);

// Generate unique 7-character classroom code
const generateJoinCode = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  return Array.from({ length: 7 }, () =>
    characters[crypto.randomInt(characters.length)]
  ).join("");
};


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Check HOST or ADMIN permission
const checkClassroomAdmin = async (classroomId, userId) => {
  const membership = await prisma.classroomMember.findUnique({
    where: {
      userId_classroomId: {
        userId,
        classroomId,
      },
    },
  });

  return (
    membership &&
    ["HOST", "ADMIN"].includes(membership.role)
  );
};

const respondWithNotificationError = (error, res, fallbackMessage) => {
  console.error("Classroom Notification API Error:", error);
  if (["P2021", "P2022"].includes(error.code)) {
    return res.status(503).json({ message: "Notification database tables are missing or outdated. Apply the pending Prisma migrations and try again." });
  }
  return res.status(500).json({ message: fallbackMessage });
};

// 1. Create classroom
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "Classroom name is required",
      });
    }

    const classroom = await prisma.classroom.create({
      data: {
        name: name.trim(),
        description,
        joinCode: generateJoinCode(),
        hostId: req.user.userId,
        members: {
          create: {
            userId: req.user.userId,
            role: "HOST",
          },
        },
      },
      include: {
        members: true,
      },
    });

    res.status(201).json({
      message: "Classroom created successfully",
      classroom,
    });
  } catch (error) {
    console.error("Create Classroom Error:", error);

    res.status(500).json({
      message: "Could not create classroom",
    });
  }
});

// Send Classroom Invitation Email

router.post("/:classroomId/invite", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const { email } = req.body;
    const userId = req.user.userId;

    if (!email || !email.trim()) {
      return res.status(400).json({
        message: "Email address is required",
      });
    }

    const isAdmin = await checkClassroomAdmin(classroomId, userId);

    if (!isAdmin) {
      return res.status(403).json({
        message: "Only HOST or ADMIN can invite members",
      });
    }

    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
      select: {
        name: true,
        joinCode: true,
      },
    });

    if (!classroom) {
      return res.status(404).json({
        message: "Classroom not found",
      });
    }

    const frontendUrl = (
      process.env.FRONTEND_URL || "http://localhost:5173"
    ).replace(/\/$/, "");

    const inviteLink = `${frontendUrl}/join?code=${encodeURIComponent(
      classroom.joinCode
    )}`;

    await transporter.sendMail({
      from: `"GrowMate" <${process.env.GMAIL_USER}>`,
      to: email.trim(),
      subject: `Invitation to join ${classroom.name} on GrowMate`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; color: #333;">
          <h2 style="color: #635bdb;">Welcome to GrowMate!</h2>

          <p>
            You have been invited to join
            <b>${classroom.name}</b>.
          </p>

          <p>Click the button below to join the classroom:</p>

          <a
            href="${inviteLink}"
            style="
              display: inline-block;
              padding: 12px 24px;
              background-color: #635bdb;
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
            "
          >
            Join Classroom
          </a>

          <p style="margin-top: 25px;">
            Or use this classroom code manually:
          </p>

          <h2 style="color: #635bdb;">${classroom.joinCode}</h2>

          <p>
            If you are not logged in, log in first using your Google account.
          </p>

          <p>
            Your membership will become active only after the
            classroom host or admin approves your join request.
          </p>

          <p>Happy Learning!<br />Team GrowMate</p>
        </div>
      `,
    });

    await prisma.classroomNotification.create({
      data: {
        classroomId,
        createdById: userId,
        recipientEmail: email.trim().toLowerCase(),
        type: "INVITATION",
        title: `Invitation to join ${classroom.name}`,
        content: `You have been invited to join ${classroom.name}. Use the invitation link in your email or enter classroom code ${classroom.joinCode}.`,
      },
    });

    res.json({
      message: `Invitation sent successfully to ${email}`,
    });

  } catch (error) {
    console.error("Invitation Email Error:", error);

    res.status(500).json({
      message: "Could not send invitation email",
    });
  }
});

// Classroom announcements and invitation notifications.
router.get("/:classroomId/notifications", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;
    const email = (req.user.email || "").trim().toLowerCase();
    const membership = await prisma.classroomMember.findUnique({
      where: { userId_classroomId: { userId, classroomId } },
    });

    if (!membership && !email) {
      return res.status(403).json({ message: "Classroom access required." });
    }

    const notifications = await prisma.classroomNotification.findMany({
      where: {
        classroomId,
        ...(membership
          ? { OR: [{ recipientEmail: null }, { recipientEmail: email }] }
          : { recipientEmail: email }),
      },
      include: {
        createdBy: { select: { name: true } },
        reads: { where: { userId }, select: { readAt: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(notifications.map(({ reads, ...notification }) => ({
      ...notification,
      isRead: reads.length > 0,
      readAt: reads[0]?.readAt || null,
    })));
  } catch (error) {
    respondWithNotificationError(error, res, "Could not fetch classroom notifications.");
  }
});

router.post("/:classroomId/notifications", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;
    const { title, content } = req.body;
    const isAdmin = await checkClassroomAdmin(classroomId, userId);

    if (!isAdmin) {
      return res.status(403).json({ message: "Only HOST or ADMIN can post announcements." });
    }
    if (typeof title !== "string" || !title.trim() || title.length > 140 ||
        typeof content !== "string" || !content.trim() || content.length > 5000) {
      return res.status(400).json({ message: "Provide an announcement title (up to 140 characters) and content (up to 5000 characters)." });
    }

    const notification = await prisma.classroomNotification.create({
      data: {
        classroomId,
        createdById: userId,
        type: "ANNOUNCEMENT",
        title: title.trim(),
        content: content.trim(),
      },
    });

    res.status(201).json({ notification: { ...notification, isRead: false } });
  } catch (error) {
    respondWithNotificationError(error, res, "Could not publish the announcement.");
  }
});

router.patch("/:classroomId/notifications/:notificationId/read", async (req, res) => {
  try {
    const { classroomId, notificationId } = req.params;
    const userId = req.user.userId;
    const email = (req.user.email || "").trim().toLowerCase();
    const membership = await prisma.classroomMember.findUnique({
      where: { userId_classroomId: { userId, classroomId } },
    });
    const notification = await prisma.classroomNotification.findFirst({
      where: {
        id: notificationId,
        classroomId,
        ...(membership
          ? { OR: [{ recipientEmail: null }, { recipientEmail: email }] }
          : { recipientEmail: email }),
      },
    });

    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }

    const read = await prisma.classroomNotificationRead.upsert({
      where: { notificationId_userId: { notificationId, userId } },
      update: {},
      create: { notificationId, userId },
    });
    res.json({ message: "Notification marked as read.", readAt: read.readAt });
  } catch (error) {
    respondWithNotificationError(error, res, "Could not update notification status.");
  }
});

router.get("/notifications", async (req, res) => {
  try {
    const userId = req.user.userId;
    const email = (req.user.email || "").trim().toLowerCase();
    const notifications = await prisma.classroomNotification.findMany({
      where: {
        OR: [
          { recipientEmail: email },
          {
            recipientEmail: null,
            classroom: { members: { some: { userId } } },
          },
        ],
      },
      include: {
        classroom: { select: { name: true } },
        createdBy: { select: { name: true } },
        reads: { where: { userId }, select: { readAt: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(notifications.map(({ reads, ...notification }) => ({
      ...notification,
      isRead: reads.length > 0,
      readAt: reads[0]?.readAt || null,
    })));
  } catch (error) {
    respondWithNotificationError(error, res, "Could not fetch notifications.");
  }
});

router.patch("/notifications/:notificationId/read", async (req, res) => {
  try {
    const { notificationId } = req.params;
    const userId = req.user.userId;
    const email = (req.user.email || "").trim().toLowerCase();
    const notification = await prisma.classroomNotification.findFirst({
      where: {
        id: notificationId,
        OR: [
          { recipientEmail: email },
          {
            recipientEmail: null,
            classroom: { members: { some: { userId } } },
          },
        ],
      },
    });
    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }

    const read = await prisma.classroomNotificationRead.upsert({
      where: { notificationId_userId: { notificationId, userId } },
      update: {},
      create: { notificationId, userId },
    });
    res.json({ message: "Notification marked as read.", readAt: read.readAt });
  } catch (error) {
    respondWithNotificationError(error, res, "Could not update notification status.");
  }
});

// 2. Get classrooms of logged-in user
router.get("/", async (req, res) => {
  try {
    const classrooms = await prisma.classroom.findMany({
      where: {
        members: {
          some: {
            userId: req.user.userId,
          },
        },
      },
      include: {
        _count: {
          select: {
            members: true,
          },
        },
        members: {
          where: {
            userId: req.user.userId,
          },
          select: {
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(classrooms);
  } catch (error) {
    console.error("Get Classrooms Error:", error);

    res.status(500).json({
      message: "Could not fetch classrooms",
    });
  }
});


// Get details of one classroom
router.get("/:classroomId", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;

    // Check whether the logged-in user is a classroom member
    const classroom = await prisma.classroom.findFirst({
      where: {
        id: classroomId,
        members: {
          some: {
            userId,
          },
        },
      },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                picture: true,
              },
            },
          },
        },
        _count: {
          select: {
            members: true,
          },
        },
      },
    });

    if (!classroom) {
      return res.status(404).json({
        message: "Classroom not found or you are not a member",
      });
    }

    res.json(classroom);
  } catch (error) {
    console.error("Get Classroom Details Error:", error);

    res.status(500).json({
      message: "Could not fetch classroom details",
    });
  }
});

// Only the classroom creator may assign or remove ADMIN privileges.
router.patch("/:classroomId/members/:memberId/role", async (req, res) => {
  try {
    const { classroomId, memberId } = req.params;
    const requestedRole = req.body.role;
    const classroom = await prisma.classroom.findUnique({ where: { id: classroomId }, select: { hostId: true } });
    if (!classroom) return res.status(404).json({ message: "Classroom not found." });
    const owner = await prisma.classroomMember.findUnique({ where: { userId_classroomId: { userId: req.user.userId, classroomId } } });
    if (classroom.hostId !== req.user.userId || owner?.role !== "HOST") return res.status(403).json({ message: "Only the classroom owner can manage admin roles." });
    if (!["ADMIN", "PARTICIPANT"].includes(requestedRole)) return res.status(400).json({ message: "Role must be ADMIN or PARTICIPANT." });
    const target = await prisma.classroomMember.findFirst({ where: { id: memberId, classroomId } });
    if (!target) return res.status(404).json({ message: "Participant not found." });
    if (target.userId === classroom.hostId || target.role === "HOST") return res.status(400).json({ message: "The classroom owner's role cannot be changed." });
    const member = await prisma.classroomMember.update({ where: { id: memberId }, data: { role: requestedRole } });
    res.json({ message: requestedRole === "ADMIN" ? "Participant promoted to admin." : "Admin role removed.", member });
  } catch (error) {
    console.error("Update Member Role Error:", error);
    res.status(500).json({ message: "Could not update participant role." });
  }
});

// Owners can remove any non-owner member; admins can remove students only.
router.delete("/:classroomId/members/:memberId", async (req, res) => {
  try {
    const { classroomId, memberId } = req.params;
    const requesterId = req.user.userId;
    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
      select: { hostId: true },
    });
    if (!classroom) return res.status(404).json({ message: "Classroom not found." });

    const requester = await prisma.classroomMember.findUnique({
      where: { userId_classroomId: { userId: requesterId, classroomId } },
    });
    const isOwner = classroom.hostId === requesterId && requester?.role === "HOST";
    const isAdmin = requester?.role === "ADMIN";
    if (!isOwner && !isAdmin) {
      return res.status(403).json({ message: "Only the classroom owner or an admin can remove participants." });
    }

    const target = await prisma.classroomMember.findFirst({
      where: { id: memberId, classroomId },
    });
    if (!target) return res.status(404).json({ message: "Participant not found." });
    if (target.userId === classroom.hostId || target.role === "HOST") {
      return res.status(400).json({ message: "The classroom owner cannot be removed." });
    }
    if (target.userId === requesterId) {
      return res.status(400).json({ message: "You cannot remove yourself using participant management." });
    }
    if (isAdmin && target.role !== "PARTICIPANT") {
      return res.status(403).json({ message: "Admins can remove students, but only the owner can remove another admin." });
    }

    await prisma.classroomMember.delete({ where: { id: memberId } });
    res.json({ message: "Participant removed from the classroom.", member: target });
  } catch (error) {
    console.error("Remove Classroom Member Error:", error);
    res.status(500).json({ message: "Could not remove the participant." });
  }
});


// 3. Send classroom join request
router.post("/join", async (req, res) => {
  try {
    const { joinCode } = req.body;

    if (!joinCode || !joinCode.trim()) {
      return res.status(400).json({
        message: "Classroom code is required",
      });
    }

    const classroom = await prisma.classroom.findUnique({
      where: {
        joinCode: joinCode.trim().toUpperCase(),
      },
    });

    if (!classroom) {
      return res.status(404).json({
        message: "Invalid classroom code",
      });
    }

    const userId = req.user.userId;

    const existingMember = await prisma.classroomMember.findUnique({
      where: {
        userId_classroomId: {
          userId,
          classroomId: classroom.id,
        },
      },
    });

    if (existingMember) {
      return res.status(409).json({
        message: "You have already joined this classroom",
      });
    }

    const existingRequest =
      await prisma.classroomJoinRequest.findUnique({
        where: {
          userId_classroomId: {
            userId,
            classroomId: classroom.id,
          },
        },
      });

    if (existingRequest?.status === "PENDING") {
      return res.status(409).json({
        message: "Your join request is already pending",
      });
    }

    if (existingRequest) {
      await prisma.classroomJoinRequest.update({
        where: {
          id: existingRequest.id,
        },
        data: {
          status: "PENDING",
        },
      });
    } else {
      await prisma.classroomJoinRequest.create({
        data: {
          userId,
          classroomId: classroom.id,
        },
      });
    }

    const admins = await prisma.classroomMember.findMany({
      where: { classroomId: classroom.id, role: { in: ["HOST", "ADMIN"] } },
      include: { user: { select: { email: true } } },
    });
    if (admins.length) {
      await prisma.classroomNotification.createMany({
        data: admins.map(({ user }) => ({
          classroomId: classroom.id,
          recipientEmail: user.email.toLowerCase(),
          type: "JOIN_REQUEST",
          title: "New classroom join request",
          content: `${req.user.email || "A student"} requested to join this classroom. Review the pending request in Classroom Members.`,
        })),
      });
    }

    res.status(201).json({
      message: "Join request sent successfully. Waiting for approval.",
    });
  } catch (error) {
    console.error("Join Request Error:", error);

    res.status(500).json({
      message: "Could not send join request",
    });
  }
});

// 4. Get pending requests
router.get("/:classroomId/requests", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;

    const isAdmin = await checkClassroomAdmin(
      classroomId,
      userId
    );

    if (!isAdmin) {
      return res.status(403).json({
        message: "Only HOST or ADMIN can view requests",
      });
    }

    const requests = await prisma.classroomJoinRequest.findMany({
      where: {
        classroomId,
        status: "PENDING",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            picture: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(requests);
  } catch (error) {
    console.error("Get Requests Error:", error);

    res.status(500).json({
      message: "Could not fetch join requests",
    });
  }
});

// 5. Accept join request
router.post(
  "/:classroomId/requests/:requestId/accept",
  async (req, res) => {
    try {
      const { classroomId, requestId } = req.params;
      const userId = req.user.userId;

      const isAdmin = await checkClassroomAdmin(
        classroomId,
        userId
      );

      if (!isAdmin) {
        return res.status(403).json({
          message: "Only HOST or ADMIN can accept requests",
        });
      }

      const request = await prisma.classroomJoinRequest.findFirst({
        where: {
          id: requestId,
          classroomId,
          status: "PENDING",
        },
        include: { user: { select: { email: true } } },
      });

      if (!request) {
        return res.status(404).json({
          message: "Pending request not found",
        });
      }

      await prisma.$transaction(async (tx) => {
        await tx.classroomMember.create({
          data: {
            userId: request.userId,
            classroomId,
            role: "PARTICIPANT",
          },
        });

        await tx.classroomJoinRequest.update({
          where: {
            id: requestId,
          },
          data: {
            status: "ACCEPTED",
          },
        });

        await tx.classroomNotification.create({
          data: {
            classroomId,
            createdById: userId,
            recipientEmail: request.user.email.toLowerCase(),
            type: "JOIN_APPROVED",
            title: "Your classroom request was approved",
            content: "Your request was approved. You can now open this classroom in GrowMate.",
          },
        });
      });

      res.json({
        message: "Student accepted successfully",
      });
    } catch (error) {
      console.error("Accept Request Error:", error);

      res.status(500).json({
        message: "Could not accept request",
      });
    }
  }
);

// 6. Reject join request
router.post(
  "/:classroomId/requests/:requestId/reject",
  async (req, res) => {
    try {
      const { classroomId, requestId } = req.params;
      const userId = req.user.userId;

      const isAdmin = await checkClassroomAdmin(
        classroomId,
        userId
      );

      if (!isAdmin) {
        return res.status(403).json({
          message: "Only HOST or ADMIN can reject requests",
        });
      }

      const request = await prisma.classroomJoinRequest.findFirst({
        where: {
          id: requestId,
          classroomId,
          status: "PENDING",
        },
        include: { user: { select: { email: true } } },
      });

      if (!request) {
        return res.status(404).json({
          message: "Pending request not found",
        });
      }

      await prisma.classroomJoinRequest.update({
        where: {
          id: requestId,
        },
        data: {
          status: "REJECTED",
        },
      });

      await prisma.classroomNotification.create({
        data: {
          classroomId,
          createdById: userId,
          recipientEmail: request.user.email.toLowerCase(),
          type: "JOIN_REJECTED",
          title: "Your classroom request was not approved",
          content: "Your request to join this classroom was not approved. Contact the classroom host or admin if you have questions.",
        },
      });

      res.json({
        message: "Join request rejected",
      });
    } catch (error) {
      console.error("Reject Request Error:", error);

      res.status(500).json({
        message: "Could not reject request",
      });
    }
  }
);

// Update classroom daily settings (HOST / ADMIN only)
router.put("/:classroomId/settings", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;

    const {
      dailyGoal,
      goalSettingTime,
      reflectionTime,
      tasksPerDay,
      dayParts,
      timezone,
      allowLateGoalEdits,
    } = req.body;

    // Check HOST / ADMIN permission
    const isAdmin = await checkClassroomAdmin(classroomId, userId);

    if (!isAdmin) {
      return res.status(403).json({
        message: "Only HOST or ADMIN can update classroom settings",
      });
    }

    let timezoneValid = true;
    if (timezone !== undefined) {
      try { new Intl.DateTimeFormat("en-US", { timeZone: timezone }).format(new Date()); }
      catch { timezoneValid = false; }
    }

    // Validate input
    if (
      typeof dailyGoal !== "string" ||
      !dailyGoal.trim() ||
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(goalSettingTime || "") ||
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(reflectionTime || "") ||
      !Number.isInteger(Number(tasksPerDay)) ||
      Number(tasksPerDay) < 1 ||
      Number(tasksPerDay) > 20 ||
      (timezone !== undefined && (typeof timezone !== "string" || !timezone.trim() || !timezoneValid)) ||
      (allowLateGoalEdits !== undefined && typeof allowLateGoalEdits !== "boolean") ||
      (dayParts !== undefined && (!Array.isArray(dayParts) || dayParts.length < 1 || dayParts.length > 12 || dayParts.some((part, index) => !part || typeof part.name !== "string" || !part.name.trim() || part.order !== index + 1 || !/^([01]\d|2[0-3]):[0-5]\d$/.test(part.startTime || "") || !/^([01]\d|2[0-3]):[0-5]\d$/.test(part.endTime || "") || part.startTime >= part.endTime)))
    ) {
      return res.status(400).json({
        message: "Please provide a valid goal, schedule times and task count (1–20).",
      });
    }

    const updatedClassroom = await prisma.$transaction(async (tx) => {
      const previousClassroom = await tx.classroom.findUnique({
        where: { id: classroomId },
        select: {
          dailyGoal: true,
          goalSettingTime: true,
          reflectionTime: true,
          tasksPerDay: true,
          dayParts: true,
          timezone: true,
          allowLateGoalEdits: true,
        },
      });

      const updated = await tx.classroom.update({
        where: { id: classroomId },
        data: {
          dailyGoal: dailyGoal.trim(),
          goalSettingTime,
          reflectionTime,
          tasksPerDay: Number(tasksPerDay),
          ...(dayParts === undefined ? {} : { dayParts: dayParts.map((part, index) => ({ name: part.name.trim(), order: index + 1, startTime: part.startTime, endTime: part.endTime })) }),
          ...(timezone === undefined ? {} : { timezone: timezone.trim() }),
          ...(allowLateGoalEdits === undefined ? {} : { allowLateGoalEdits }),
        },
        select: {
          id: true,
          name: true,
          dailyGoal: true,
          goalSettingTime: true,
          reflectionTime: true,
          tasksPerDay: true,
          dayParts: true,
          timezone: true,
          allowLateGoalEdits: true,
        },
      });

      const scheduleChanged = previousClassroom && (
        previousClassroom.dailyGoal !== updated.dailyGoal ||
        previousClassroom.goalSettingTime !== updated.goalSettingTime ||
        previousClassroom.reflectionTime !== updated.reflectionTime ||
        previousClassroom.tasksPerDay !== updated.tasksPerDay
        || JSON.stringify(previousClassroom.dayParts) !== JSON.stringify(updated.dayParts)
        || previousClassroom.timezone !== updated.timezone
        || previousClassroom.allowLateGoalEdits !== updated.allowLateGoalEdits
      );
      if (scheduleChanged) {
        await tx.classroomNotification.create({
          data: {
            classroomId,
            createdById: userId,
            type: "SCHEDULE_UPDATE",
            title: "Classroom daily schedule updated",
            content: `Today's classroom goal: ${updated.dailyGoal}. Goal setting time: ${updated.goalSettingTime}. Reflection time: ${updated.reflectionTime}. Tasks per student: ${updated.tasksPerDay}.`,
          },
        });
      }
      return updated;
    });

    res.json({
      message: "Classroom settings updated successfully",
      classroom: updatedClassroom,
    });
  } catch (error) {
    console.error("Update Classroom Settings Error:", error);

    res.status(500).json({
      message: "Could not update classroom settings",
    });
  }
});

// Get classroom settings
router.get("/:classroomId/settings", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;

    const membership = await prisma.classroomMember.findUnique({
      where: {
        userId_classroomId: {
          userId,
          classroomId,
        },
      },
    });

    if (!membership) {
      return res.status(403).json({
        message: "You are not a member of this classroom",
      });
    }

    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
      select: {
        id: true,
        name: true,
        dailyGoal: true,
        goalSettingTime: true,
        reflectionTime: true,
        tasksPerDay: true,
        dayParts: true,
        timezone: true,
        allowLateGoalEdits: true,
      },
    });

    if (!classroom) {
      return res.status(404).json({
        message: "Classroom not found",
      });
    }

    res.json({
      classroom,
      role: membership.role,
    });
  } catch (error) {
    console.error("Get Classroom Settings Error:", error);
    res.status(500).json({
      message: "Could not fetch classroom settings",
    });
  }
});

module.exports = router;
