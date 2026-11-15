
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
    } = req.body;

    // Check HOST / ADMIN permission
    const isAdmin = await checkClassroomAdmin(classroomId, userId);

    if (!isAdmin) {
      return res.status(403).json({
        message: "Only HOST or ADMIN can update classroom settings",
      });
    }

    // Validate input
    if (
      typeof dailyGoal !== "string" ||
      !dailyGoal.trim() ||
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(goalSettingTime || "") ||
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(reflectionTime || "") ||
      !Number.isInteger(Number(tasksPerDay)) ||
      Number(tasksPerDay) < 1 ||
      Number(tasksPerDay) > 20
    ) {
      return res.status(400).json({
        message: "Please provide a valid goal, schedule times and task count (1–20).",
      });
    }

    const updatedClassroom = await prisma.classroom.update({
      where: { id: classroomId },
      data: {
        dailyGoal: dailyGoal.trim(),
        goalSettingTime,
        reflectionTime,
        tasksPerDay: Number(tasksPerDay),
      },
      select: {
        id: true,
        name: true,
        dailyGoal: true,
        goalSettingTime: true,
        reflectionTime: true,
        tasksPerDay: true,
      },
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
