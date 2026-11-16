
const express = require("express");
const prisma = require("../prisma");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.use(authMiddleware);

// Convert YYYY-MM-DD into a database date.
const getDate = (value) => {
  const dateString =
    value ||
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
    }).format(new Date());

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return null;
  }

  const date = new Date(`${dateString}T00:00:00.000Z`);

  if (Number.isNaN(date.getTime()) ||
      date.toISOString().slice(0, 10) !== dateString) {
    return null;
  }

  return date;
};

const getTodayInTimezone = (timezone) => new Intl.DateTimeFormat("en-CA", {
  timeZone: timezone || "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
}).format(new Date());
const minutesInTimezone = (timezone) => {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: timezone || "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  return Number(parts.find((part) => part.type === "hour")?.value || 0) * 60 + Number(parts.find((part) => part.type === "minute")?.value || 0);
};
const timeToMinutes = (value) => {
  const [hour, minute] = String(value || "09:00").split(":").map(Number);
  return hour * 60 + minute;
};

// Check whether the logged-in user belongs to this classroom.
const checkMembership = async (classroomId, userId) => {
  return prisma.classroomMember.findUnique({
    where: {
      userId_classroomId: {
        userId,
        classroomId,
      },
    },
  });
};

router.get("/:classroomId/participants/:participantId/dates", async (req, res) => {
  try {
    const { classroomId, participantId } = req.params;
    const membership = await checkMembership(classroomId, req.user.userId);
    if (!membership) return res.status(403).json({ message: "You are not a classroom member." });
    if (req.user.userId !== participantId && !["HOST", "ADMIN"].includes(membership.role)) return res.status(403).json({ message: "You can only view your own progress." });
    if (!await checkMembership(classroomId, participantId)) return res.status(404).json({ message: "Participant not found in this classroom." });
    const [goals, reflections] = await Promise.all([
      prisma.dailyGoal.findMany({ where: { classroomId, userId: participantId }, select: { date: true } }),
      prisma.dailyReflection.findMany({ where: { classroomId, userId: participantId }, select: { date: true } }),
    ]);
    res.json([...new Set([...goals, ...reflections].map(({ date }) => date.toISOString().slice(0, 10)))].sort());
  } catch (error) {
    console.error("Participant History Dates Error:", error);
    res.status(500).json({ message: "Could not load participant history dates." });
  }
});

router.get("/:classroomId/participants/:participantId/history", async (req, res) => {
  try {
    const { classroomId, participantId } = req.params;
    const membership = await checkMembership(classroomId, req.user.userId);
    if (!membership) return res.status(403).json({ message: "You are not a classroom member." });
    if (req.user.userId !== participantId && !["HOST", "ADMIN"].includes(membership.role)) return res.status(403).json({ message: "You can only view your own progress." });
    if (!await checkMembership(classroomId, participantId)) return res.status(404).json({ message: "Participant not found in this classroom." });
    const date = getDate(req.query.date);
    if (!date) return res.status(400).json({ message: "Invalid date. Use YYYY-MM-DD." });
    const [classroom, participant, goal, reflection] = await Promise.all([
      prisma.classroom.findUnique({ where: { id: classroomId }, select: { timezone: true } }),
      prisma.user.findUnique({ where: { id: participantId }, select: { id: true, name: true, email: true, picture: true } }),
      prisma.dailyGoal.findUnique({ where: { userId_classroomId_date: { userId: participantId, classroomId, date } }, include: { tasks: { orderBy: { createdAt: "asc" } } } }),
      prisma.dailyReflection.findUnique({ where: { userId_classroomId_date: { userId: participantId, classroomId, date } } }),
    ]);
    if (!participant) return res.status(404).json({ message: "Participant not found." });
    const totalTasks = goal?.tasks.length || 0;
    const completedTasks = goal?.tasks.filter((task) => task.completed).length || 0;
    const taskPercent = totalTasks ? Math.round(completedTasks / totalTasks * 100) : null;
    res.json({ participant, date: req.query.date, timezone: classroom?.timezone || "Asia/Kolkata", goal, reflection, progress: { totalTasks, completedTasks, taskPercent, reflectionSubmitted: Boolean(reflection?.content), overallPercent: taskPercent } });
  } catch (error) {
    console.error("Participant History Error:", error);
    res.status(500).json({ message: "Could not load participant history." });
  }
});

// 1. Get daily goal, tasks and reflection.
router.get("/:classroomId", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;
    const date = getDate(req.query.date);

    if (!date) {
      return res.status(400).json({ message: "Invalid date. Use YYYY-MM-DD." });
    }

    const member = await checkMembership(classroomId, userId);

    if (!member) {
      return res.status(403).json({ message: "You are not a classroom member." });
    }

    const [goal, reflection] = await Promise.all([
      prisma.dailyGoal.findUnique({
        where: {
          userId_classroomId_date: {
            userId,
            classroomId,
            date,
          },
        },
        include: {
          tasks: {
            orderBy: { createdAt: "asc" },
          },
        },
      }),

      prisma.dailyReflection.findUnique({
        where: {
          userId_classroomId_date: {
            userId,
            classroomId,
            date,
          },
        },
      }),
    ]);

    res.json({ goal, reflection });
  } catch (error) {
    console.error("Get Daily Growth Error:", error);
    res.status(500).json({ message: "Could not fetch daily growth data." });
  }
});

// 2. Create or replace the student's daily tasks.

router.put("/:classroomId/goal", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;
    const statement = typeof req.body.statement === "string" ? req.body.statement.trim() : "";
    const { tasks } = req.body;

    if (!Array.isArray(tasks)) {
      return res.status(400).json({
        message: "Tasks must be an array.",
      });
    }

    const cleanedTasks = tasks
      .map((task) => ({
        id: task.id || null,
        title: typeof task.title === "string" ? task.title.trim() : "",
        completed: Boolean(task.completed),
      }))
      .filter((task) => task.title);

    const member = await checkMembership(classroomId, userId);

    if (!member) {
      return res.status(403).json({
        message: "You are not a classroom member.",
      });
    }

    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
      select: { tasksPerDay: true, timezone: true, goalSettingTime: true, allowLateGoalEdits: true },
    });

    if (!classroom) {
      return res.status(404).json({
        message: "Classroom not found.",
      });
    }

    const requestedDate = req.body.date || getTodayInTimezone(classroom.timezone);
    const date = getDate(requestedDate);
    if (!date) return res.status(400).json({ message: "Invalid date. Use YYYY-MM-DD." });
    if (requestedDate !== getTodayInTimezone(classroom.timezone)) {
      return res.status(403).json({ message: "You can only create or change today's personal goal." });
    }
    if (!classroom.allowLateGoalEdits && minutesInTimezone(classroom.timezone) > timeToMinutes(classroom.goalSettingTime)) {
      return res.status(403).json({ message: "Today's goal-setting window has closed." });
    }

    if (cleanedTasks.length > classroom.tasksPerDay) {
      return res.status(400).json({
        message: `You can add only ${classroom.tasksPerDay} tasks per day.`,
      });
    }

    const goal = await prisma.$transaction(async (tx) => {
      const savedGoal = await tx.dailyGoal.upsert({
        where: {
          userId_classroomId_date: {
            userId,
            classroomId,
            date,
          },
        },
        update: { ...(statement ? { statement } : {}) },
        create: {
          userId,
          classroomId,
          date,
          statement: statement || null,
        },
      });

      const existingTasks = await tx.dailyGoalTask.findMany({
        where: { dailyGoalId: savedGoal.id },
      });

      const existingIds = existingTasks.map((task) => task.id);

      const submittedIds = cleanedTasks
        .filter((task) => task.id)
        .map((task) => task.id);

      const invalidIds = submittedIds.filter(
        (id) => !existingIds.includes(id)
      );

      if (invalidIds.length > 0) {
        throw new Error("Invalid task ID.");
      }

      const retainedIds = [];

      for (const task of cleanedTasks) {
        if (task.id) {
          await tx.dailyGoalTask.update({
            where: { id: task.id },
            data: {
              title: task.title,
              completed: task.completed,
            },
          });

          retainedIds.push(task.id);
        } else {
          const newTask = await tx.dailyGoalTask.create({
            data: {
              dailyGoalId: savedGoal.id,
              title: task.title,
              completed: false,
            },
          });

          retainedIds.push(newTask.id);
        }
      }

      await tx.dailyGoalTask.deleteMany({
        where: {
          dailyGoalId: savedGoal.id,
          id: { notIn: retainedIds },
        },
      });

      return tx.dailyGoal.findUnique({
        where: { id: savedGoal.id },
        include: { tasks: true },
      });
    });

    res.json({
      message: "Daily goals saved successfully.",
      goal,
    });
  } catch (error) {
    console.error("Save Daily Goal Error:", error);
    res.status(500).json({
      message: "Could not save daily goals.",
    });
  }
});

// 3. Mark a task completed or pending.
router.patch("/:classroomId/tasks/:taskId", async (req, res) => {
  try {
    const { classroomId, taskId } = req.params;
    const userId = req.user.userId;
    const { completed } = req.body;

    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "Completed must be true or false." });
    }

    const task = await prisma.dailyGoalTask.findFirst({
      where: {
        id: taskId,
        dailyGoal: {
          classroomId,
          userId,
        },
      },
      include: { dailyGoal: { select: { date: true } } },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    const classroom = await prisma.classroom.findUnique({ where: { id: classroomId }, select: { timezone: true } });
    if (task.dailyGoal.date.toISOString().slice(0, 10) !== getTodayInTimezone(classroom?.timezone)) {
      return res.status(403).json({ message: "Past daily task progress cannot be changed." });
    }

    const updatedTask = await prisma.dailyGoalTask.update({
      where: { id: taskId },
      data: { completed },
    });

    res.json({
      message: "Task updated successfully.",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Update Task Error:", error);
    res.status(500).json({ message: "Could not update task." });
  }
});

// 4. Delete a task.
router.delete("/:classroomId/tasks/:taskId", async (req, res) => {
  try {
    const { classroomId, taskId } = req.params;
    const userId = req.user.userId;

    const task = await prisma.dailyGoalTask.findFirst({
      where: {
        id: taskId,
        dailyGoal: {
          classroomId,
          userId,
        },
      },
      include: { dailyGoal: { select: { date: true } } },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    const classroom = await prisma.classroom.findUnique({ where: { id: classroomId }, select: { timezone: true, goalSettingTime: true, allowLateGoalEdits: true } });
    if (task.dailyGoal.date.toISOString().slice(0, 10) !== getTodayInTimezone(classroom?.timezone)) {
      return res.status(403).json({ message: "Past daily goals cannot be changed." });
    }
    if (!classroom?.allowLateGoalEdits && minutesInTimezone(classroom?.timezone) > timeToMinutes(classroom?.goalSettingTime)) {
      return res.status(403).json({ message: "Today's goal-setting window has closed." });
    }

    await prisma.dailyGoalTask.delete({
      where: { id: taskId },
    });

    res.json({ message: "Task deleted successfully." });
  } catch (error) {
    console.error("Delete Task Error:", error);
    res.status(500).json({ message: "Could not delete task." });
  }
});

// 5. Save or update the student's daily reflection.
router.put("/:classroomId/reflection", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;
    const { content } = req.body;

    if (typeof content !== "string" || !content.trim()) {
      return res.status(400).json({ message: "Reflection content is required." });
    }

    const member = await checkMembership(classroomId, userId);

    if (!member) {
      return res.status(403).json({ message: "You are not a classroom member." });
    }

    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
      select: { timezone: true, reflectionTime: true },
    });
    if (!classroom) return res.status(404).json({ message: "Classroom not found." });

    const requestedDate = req.body.date || getTodayInTimezone(classroom.timezone);
    const date = getDate(requestedDate);
    if (!date) return res.status(400).json({ message: "Invalid date. Use YYYY-MM-DD." });
    if (requestedDate !== getTodayInTimezone(classroom.timezone)) {
      return res.status(403).json({ message: "You can only submit or edit today's reflection." });
    }
    if (minutesInTimezone(classroom.timezone) > timeToMinutes(classroom.reflectionTime || "17:00")) {
      return res.status(403).json({ message: "Today's reflection window has closed." });
    }

    const reflection = await prisma.dailyReflection.upsert({
      where: {
        userId_classroomId_date: {
          userId,
          classroomId,
          date,
        },
      },
      update: {
        content: content.trim(),
        assessmentScore: null,
        assessmentCorrect: null,
        assessmentTotal: null,
        assessmentDetails: null,
        assessedAt: null,
      },
      create: {
        userId,
        classroomId,
        date,
        content: content.trim(),
      },
    });

    res.json({
      message: "Reflection saved successfully.",
      reflection,
    });
  } catch (error) {
    console.error("Save Reflection Error:", error);
    res.status(500).json({ message: "Could not save reflection." });
  }
});

module.exports = router;
