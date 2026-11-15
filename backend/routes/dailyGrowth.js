
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
    const date = getDate(req.body.date);
    const { tasks } = req.body;

    if (!date) {
      return res.status(400).json({
        message: "Invalid date. Use YYYY-MM-DD.",
      });
    }

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
      select: { tasksPerDay: true },
    });

    if (!classroom) {
      return res.status(404).json({
        message: "Classroom not found.",
      });
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
        update: {},
        create: {
          userId,
          classroomId,
          date,
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
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
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
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
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
    const date = getDate(req.body.date);
    const { content } = req.body;

    if (!date) {
      return res.status(400).json({ message: "Invalid date. Use YYYY-MM-DD." });
    }

    if (typeof content !== "string" || !content.trim()) {
      return res.status(400).json({ message: "Reflection content is required." });
    }

    const member = await checkMembership(classroomId, userId);

    if (!member) {
      return res.status(403).json({ message: "You are not a classroom member." });
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
