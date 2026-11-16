
const express = require("express");
const prisma = require("../prisma");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.use(authMiddleware);

router.post("/:classroomId/questions", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;

    const dateString =
      req.body.date ||
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
      }).format(new Date());

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return res.status(400).json({
        message: "Invalid date. Use YYYY-MM-DD.",
      });
    }

    const date = new Date(`${dateString}T00:00:00.000Z`);

    if (
      Number.isNaN(date.getTime()) ||
      date.toISOString().slice(0, 10) !== dateString
    ) {
      return res.status(400).json({
        message: "Invalid date.",
      });
    }

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
        message: "You are not a member of this classroom.",
      });
    }

    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
      select: { dailyGoal: true },
    });

    if (!classroom) {
      return res.status(404).json({
        message: "Classroom not found.",
      });
    }

    const [dailyGoal, reflection] = await Promise.all([
      prisma.dailyGoal.findUnique({
        where: {
          userId_classroomId_date: {
            userId,
            classroomId,
            date,
          },
        },
        include: { tasks: true },
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

    if (!reflection) {
      return res.status(400).json({
        message: "Please submit your daily reflection first.",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        message: "Gemini API key is not configured.",
      });
    }

    const tasks = dailyGoal?.tasks || [];

    const completedTasks = tasks.filter(
      (task) => task.completed
    );

    const pendingTasks = tasks.filter(
      (task) => !task.completed
    );

    const { GoogleGenAI } = await import("@google/genai");

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      apiVersion: "v1beta",
    });

    const prompt = `
You are GrowMate, a supportive student growth assistant.

Analyse this student's daily progress.

CLASSROOM GOAL:
${classroom.dailyGoal || "Not set"}

STUDENT TASKS:
${tasks.map((task) =>
  `- ${task.title}: ${task.completed ? "Completed" : "Pending"}`
).join("\n") || "No tasks added"}

COMPLETED TASKS:
${completedTasks.length}

PENDING TASKS:
${pendingTasks.length}

STUDENT REFLECTION:
${reflection.content}

Generate 5 to 10 personalized reflection questions.

Rules:
1. Questions must be based on the student's actual tasks and reflection.
2. Ask about achievements, challenges, learning and improvement.
3. Include questions about pending tasks when relevant.
4. Use simple, friendly English.
5. Avoid generic or repetitive questions.
6. Do not invent information about the student.

Return only valid JSON in this format:
{
  "questions": [
    "Question 1",
    "Question 2"
  ]
}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const responseText = result.text;

    if (!responseText) {
      throw new Error("Gemini returned an empty response.");
    }

    const generatedData = JSON.parse(responseText);

    const questions = generatedData.questions;

    if (
      !Array.isArray(questions) ||
      questions.length < 5 ||
      questions.length > 10 ||
      questions.some(
        (question) =>
          typeof question !== "string" || !question.trim()
      )
    ) {
      throw new Error("Gemini returned an invalid question list.");
    }

    res.json({
      message: "AI reflection questions generated successfully.",
      questions,
      taskSummary: {
        total: tasks.length,
        completed: completedTasks.length,
        pending: pendingTasks.length,
      },
    });
  } catch (error) {
    console.error("AI Reflection Error:", error);

    res.status(500).json({
      message: "Could not generate AI reflection questions.",
    });
  }
});

router.post("/:classroomId/feedback", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;
    const { question, answer } = req.body;

    if (typeof question !== "string" || !question.trim() ||
        typeof answer !== "string" || !answer.trim() || answer.length > 6000) {
      return res.status(400).json({ message: "Provide a reflection question and a non-empty answer under 6000 characters." });
    }

    const membership = await prisma.classroomMember.findUnique({
      where: { userId_classroomId: { userId, classroomId } },
    });
    if (!membership) {
      return res.status(403).json({ message: "You are not a member of this classroom." });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ message: "Gemini API key is not configured." });
    }

    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      apiVersion: "v1beta",
    });
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a supportive student reflection coach. Give brief, kind, specific feedback only from the student's answer. Do not invent achievements or facts. Suggest one small next step. Keep it under 90 words.\n\nQuestion: ${question.trim()}\n\nStudent answer: ${answer.trim()}`,
    });
    const feedback = result.text?.trim();
    if (!feedback) throw new Error("Gemini returned empty reflection feedback.");

    res.json({ feedback });
  } catch (error) {
    console.error("AI Reflection Feedback Error:", error);
    res.status(500).json({ message: "Could not generate reflection feedback." });
  }
});

router.post("/:classroomId/assessment", async (req, res) => {
  try {
    const { classroomId } = req.params;
    const userId = req.user.userId;
    const { date: dateString, answers } = req.body;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString || "") ||
        !Array.isArray(answers) || answers.length < 1 || answers.length > 10 ||
        answers.some((item) => !item || typeof item.question !== "string" ||
          !item.question.trim() || typeof item.answer !== "string" ||
          !item.answer.trim() || item.answer.length > 6000)) {
      return res.status(400).json({ message: "Answer every reflection question before starting your assessment." });
    }

    const date = new Date(`${dateString}T00:00:00.000Z`);
    if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== dateString) {
      return res.status(400).json({ message: "Invalid assessment date." });
    }

    const membership = await prisma.classroomMember.findUnique({
      where: { userId_classroomId: { userId, classroomId } },
    });
    if (!membership) return res.status(403).json({ message: "You are not a member of this classroom." });

    const reflection = await prisma.dailyReflection.findUnique({
      where: { userId_classroomId_date: { userId, classroomId, date } },
    });
    if (!reflection) return res.status(400).json({ message: "Submit your daily reflection before assessment." });
    if (!process.env.GEMINI_API_KEY) return res.status(500).json({ message: "Gemini API key is not configured." });

    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY, apiVersion: "v1beta" });
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Assess each student's response to their personal reflection question. Be fair and supportive: mark correct=true only when the answer meaningfully and accurately addresses the question, based on the student's own reflection below. For subjective questions, accept a sincere, relevant answer; do not require one exact wording. Empty or unrelated answers are incorrect. Do not judge the student, only the answer. Return one result per supplied answer, preserving its index.\n\nStudent's original reflection:\n${reflection.content}\n\nQuestions and answers:\n${JSON.stringify(answers.map(({ question, answer }, index) => ({ index, question, answer })))}\n\nReturn JSON only: {\"results\":[{\"index\":0,\"correct\":true,\"feedback\":\"Brief supportive reason\"}]}`,
      config: { responseMimeType: "application/json" },
    });
    const parsed = JSON.parse(result.text || "{}");
    if (!Array.isArray(parsed.results) || parsed.results.length !== answers.length ||
        parsed.results.some((item, index) => item.index !== index || typeof item.correct !== "boolean")) {
      throw new Error("Gemini returned an invalid assessment.");
    }

    const correct = parsed.results.filter((item) => item.correct).length;
    const score = Math.round(correct / answers.length * 100);
    const assessment = await prisma.dailyReflection.update({
      where: { id: reflection.id },
      data: {
        assessmentScore: score,
        assessmentCorrect: correct,
        assessmentTotal: answers.length,
        assessmentDetails: parsed.results.map((item, index) => ({
          question: answers[index].question.trim(),
          answer: answers[index].answer.trim(),
          correct: item.correct,
          feedback: typeof item.feedback === "string" ? item.feedback.slice(0, 400) : "",
        })),
        assessedAt: new Date(),
      },
      select: { assessmentScore: true, assessmentCorrect: true, assessmentTotal: true, assessmentDetails: true, assessedAt: true },
    });

    res.json({ assessment });
  } catch (error) {
    console.error("AI Reflection Assessment Error:", error);
    res.status(500).json({ message: "Could not assess your reflection answers. Please try again." });
  }
});

module.exports = router;
