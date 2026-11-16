
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Target,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  Mic,
  MicOff,
  Volume2,
  Pause,
  Play,
  Square,
} from "lucide-react";
import useVoiceAssistant from "../hooks/useVoiceAssistant";

import "./Goals.css";

const API_URL = "https://growmate-backend-jpp4.onrender.com/api/daily-growth";
const CLASSROOM_API = "https://growmate-backend-jpp4.onrender.com/api/classrooms";

function getToday(timezone = "Asia/Kolkata") {
  return new Intl.DateTimeFormat("en-CA", { timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

function Goals() {
  const { classroomId } = useParams();
  const token = localStorage.getItem("token");

  const [goal, setGoal] = useState("");
  const [personalGoal, setPersonalGoal] = useState("");
  const [tasks, setTasks] = useState([]);
  const [classroomSettings, setClassroomSettings] = useState(null);
  const [loading, setLoading] = useState(Boolean(classroomId && token));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [clock, setClock] = useState(0);

  useEffect(() => {
    const updateClock = () => setClock(Date.now());
    const firstUpdate = window.setTimeout(updateClock, 0);
    const timer = window.setInterval(updateClock, 60_000);
    return () => {
      window.clearTimeout(firstUpdate);
      window.clearInterval(timer);
    };
  }, []);

  const today = getToday(classroomSettings?.timezone);

  const headers = useMemo(() => ({ Authorization: `Bearer ${token}` }), [token]);

  const {
    speak,
    pauseSpeech,
    resumeSpeech,
    stopSpeech,
    toggleMute,
    startListening,
    stopListening,
    listeningTarget,
    voiceError,
    speechStatus,
    isMuted,
  } = useVoiceAssistant();

  useEffect(() => () => {
    stopSpeech();
  }, [stopSpeech]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const [goalResponse, settingsResponse] = await Promise.all([
          axios.get(`${API_URL}/${classroomId}`, {
            headers,
            params: { date: today },
          }),
          axios.get(`${CLASSROOM_API}/${classroomId}/settings`, {
            headers,
          }),
        ]);

        setTasks(goalResponse.data.goal?.tasks || []);
        setPersonalGoal(goalResponse.data.goal?.statement || "");
        setClassroomSettings(settingsResponse.data.classroom);
      } catch (err) {
        console.error("Fetch Goals Error:", err);
        setError(
          err.response?.data?.message || "Could not load your goals."
        );
      } finally {
        setLoading(false);
      }
    };

    if (classroomId && token) fetchGoals();
  }, [classroomId, headers, today, token]);

  const taskLimit = classroomSettings?.tasksPerDay || 5;
  const limitReached = tasks.length >= taskLimit;
  const goalWindowClosed = Boolean(classroomSettings && !classroomSettings.allowLateGoalEdits && (() => {
    const timeParts = new Intl.DateTimeFormat("en-GB", { timeZone: classroomSettings.timezone || "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date(clock)).split(":").map(Number);
    const [hour, minute] = (classroomSettings.goalSettingTime || "09:00").split(":").map(Number);
    return timeParts[0] * 60 + timeParts[1] > hour * 60 + minute;
  })());

  const saveTasks = async (updatedTasks) => {
    try {
      setSaving(true);
      setError("");

      const response = await axios.put(
        `${API_URL}/${classroomId}/goal`,
        {
          date: today,
          statement: personalGoal,
          tasks: updatedTasks.map((task) => ({
          id: task.id,
          title: task.title,
          completed: task.completed,
        })),

        
        },
        { headers }
      );

      setTasks(response.data.goal.tasks);
      setPersonalGoal(response.data.goal.statement || "");
      return true;
    } catch (err) {
      console.error("Save Goals Error:", err);
      setError(
        err.response?.data?.message || "Could not save your goals."
      );
      return false;
    } finally {
      setSaving(false);
    }
  };

  const savePersonalGoal = async () => {
    if (!personalGoal.trim() || saving || goalWindowClosed) return;
    await saveTasks(tasks);
  };

  const addTask = async (e) => {
    e.preventDefault();

    if (!goal.trim() || saving || limitReached) return;

    const updatedTasks = [
      ...tasks,
      {
        title: goal.trim(),
        completed: false,
      },
    ];

    const saved = await saveTasks(updatedTasks);

    if (saved) {
      setGoal("");
    }
  };

  const toggleTask = async (taskId, completed) => {
    try {
      setError("");

      const response = await axios.patch(
        `${API_URL}/${classroomId}/tasks/${taskId}`,
        { completed: !completed },
        { headers }
      );

      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === taskId ? response.data.task : task
        )
      );
      return true;
    } catch (err) {
      console.error("Update Task Error:", err);
      setError(
        err.response?.data?.message || "Could not update task."
      );
      return false;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      setError("");

      await axios.delete(
        `${API_URL}/${classroomId}/tasks/${taskId}`,
        { headers }
      );

      setTasks((currentTasks) =>
        currentTasks.filter((task) => task.id !== taskId)
      );
    } catch (err) {
      console.error("Delete Task Error:", err);
      setError(
        err.response?.data?.message || "Could not delete task."
      );
    }
  };

  const handleGoalVoiceInput = () => {
    if (listeningTarget === "goal-input") {
      stopListening();
      return;
    }
    startListening({
      target: "goal-input",
      onResult: (transcript) => {
        setGoal((current) => `${current.trim()}${current.trim() ? " " : ""}${transcript}`);
      },
    });
  };

  const readTasks = () => {
    const pending = tasks.filter((task) => !task.completed);
    const completed = tasks.filter((task) => task.completed);
    if (!tasks.length) {
      speak(`You have not added any tasks for today. The classroom goal is ${classroomSettings?.dailyGoal || "not set yet"}.`);
      return;
    }
    const taskText = tasks.map((task) => `${task.title}, ${task.completed ? "completed" : "pending"}`).join(". ");
    speak(`You have completed ${completed.length} of ${tasks.length} tasks. ${pending.length ? `Still pending: ${pending.map((task) => task.title).join(", ")}.` : "All tasks are complete."} Today's task list: ${taskText}.`);
  };

  const answerGoalQuestion = (spokenQuestion) => {
    const question = spokenQuestion.toLowerCase();
    const requestedTask = tasks.find((task) => question.includes(task.title.toLowerCase()));
    const asksCompletion = /complete|completed|done|finish|finished|mark/.test(question);

    if (requestedTask && asksCompletion) {
      if (requestedTask.completed) {
        speak(`${requestedTask.title} is already marked complete.`);
      } else {
        toggleTask(requestedTask.id, requestedTask.completed).then((saved) => {
          if (saved) speak(`Marked ${requestedTask.title} complete.`);
        });
      }
      return;
    }
    if (/classroom goal|common goal|goal for today|today.s goal/.test(question)) {
      speak(classroomSettings?.dailyGoal || "Your classroom has not set a common goal yet.");
      return;
    }
    if (/completed|finished|done/.test(question)) {
      const completed = tasks.filter((task) => task.completed);
      speak(completed.length ? `Completed tasks: ${completed.map((task) => task.title).join(", ")}.` : "You have not completed any tasks yet.");
      return;
    }
    if (/pending|left|remaining|what should|next task/.test(question)) {
      const pending = tasks.filter((task) => !task.completed);
      speak(pending.length ? `Your pending tasks are: ${pending.map((task) => task.title).join(", ")}.` : "You have no pending tasks. Great work!");
      return;
    }
    speak("I can tell you the classroom goal, list completed or pending tasks, or mark a task complete. Please ask about one of those.");
  };

  const handleGoalQuestion = () => {
    if (listeningTarget === "goal-question") {
      stopListening();
      return;
    }
    startListening({ target: "goal-question", onResult: answerGoalQuestion });
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  if (loading) {
    return <p>Loading your daily goals...</p>;
  }

  if (!classroomId || !token) {
    return <p>Please log in to access your goals.</p>;
  }

  return (
    <section className="goals-page">
      <div className="goals-heading">
        <div>
          <span className="goals-label">DAILY GROWTH</span>
          <h2>My Daily Goals</h2>
          <p>Break your classroom goal into small tasks.</p>
        </div>
        <Target size={38} />
      </div>

      {classroomSettings && (
        <div className="classroom-common-goal">
          <h3>
            <Target size={19} /> Today's Classroom Goal
          </h3>

          <p>
            {classroomSettings.dailyGoal ||
              "Your classroom admin has not set today's common goal yet."}
          </p>

          <div className="classroom-goal-times">
            <span>
              <Clock size={15} />
              Goal setting closes: {classroomSettings.goalSettingTime || "Not set"}
            </span>

            <span>
              <Clock size={15} />
              Reflection closes: {classroomSettings.reflectionTime || "Not set"}
            </span>
          </div>
        </div>
      )}

      <div className="goal-voice-assistant" aria-label="Goal and task voice assistant">
        <p>
          Voice assistant: {listeningTarget === "goal-input" ? "Listening for a goal..." : listeningTarget === "goal-question" ? "Listening to your question..." : speechStatus === "speaking" ? "Reading aloud..." : speechStatus === "paused" ? "Speech paused" : "Ready"}
        </p>
        <button type="button" onClick={pauseSpeech} disabled={speechStatus !== "speaking"}><Pause size={16} /> Pause</button>
        <button type="button" onClick={resumeSpeech} disabled={speechStatus !== "paused"}><Play size={16} /> Resume</button>
        <button type="button" onClick={stopSpeech} disabled={speechStatus === "idle"}><Square size={15} /> Stop</button>
        <button type="button" onClick={toggleMute} aria-pressed={isMuted}><Volume2 size={16} /> {isMuted ? "Unmute" : "Mute"}</button>
        {voiceError && <p role="alert">{voiceError}</p>}
        <button type="button" onClick={() => speak(classroomSettings?.dailyGoal || "Your classroom has not set a common goal yet.")}>
          <Volume2 size={16} /> Read classroom goal
        </button>
        <button type="button" onClick={() => speak(`Goal setting time: ${classroomSettings?.goalSettingTime || "not set"}. Reflection time: ${classroomSettings?.reflectionTime || "not set"}.`)}>
          <Volume2 size={16} /> Read schedule
        </button>
        <button type="button" onClick={readTasks}><Volume2 size={16} /> Read today's tasks</button>
        <button type="button" onClick={handleGoalQuestion} aria-pressed={listeningTarget === "goal-question"}>
          {listeningTarget === "goal-question" ? <MicOff size={16} /> : <Mic size={16} />}
          {listeningTarget === "goal-question" ? "Stop asking" : "Ask about goals or tasks"}
        </button>
      </div>

      <form className="goal-form" onSubmit={addTask}>
        <textarea
          className="personal-goal-input"
          value={personalGoal}
          onChange={(event) => setPersonalGoal(event.target.value)}
          placeholder="Write your personal goal that supports the classroom goal..."
          aria-label="My personal daily goal"
          disabled={saving || goalWindowClosed}
          maxLength={1000}
        />
        <button type="button" onClick={savePersonalGoal} disabled={saving || !personalGoal.trim() || goalWindowClosed}>
          <Target size={18} /> Save Personal Goal
        </button>
        <input
          type="text"
          placeholder={
            limitReached
              ? "Daily task limit reached"
              : "Enter your task..."
          }
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          disabled={saving || limitReached || goalWindowClosed}
        />

        <button
          type="button"
          onClick={handleGoalVoiceInput}
          disabled={saving || limitReached || goalWindowClosed}
          aria-pressed={listeningTarget === "goal-input"}
          aria-label={listeningTarget === "goal-input" ? "Stop goal voice input" : "Speak a personal goal"}
        >
          {listeningTarget === "goal-input" ? <MicOff size={18} /> : <Mic size={18} />}
          {listeningTarget === "goal-input" ? "Listening..." : "Speak goal"}
        </button>

        <button
          type="submit"
          disabled={saving || !goal.trim() || limitReached || goalWindowClosed}
        >
          <Plus size={18} />
          Add Task
        </button>
      </form>

      {goalWindowClosed && <p className="goal-error" role="status">The personal goal-setting window is closed. Saved goal progress and task completion remain available.</p>}

      <p className="goal-task-limit">
        Tasks added: {tasks.length} / {taskLimit}
      </p>

      {limitReached && (
        <p className="goal-task-limit">
          You have reached your daily task limit.
        </p>
      )}

      {error && <p className="goal-error">{error}</p>}

      <div className="goal-progress">
        <div className="goal-progress-info">
          <span>Today's progress</span>
          <strong>{progress}%</strong>
        </div>

        <div className="goal-progress-track">
          <div style={{ width: `${progress}%` }} />
        </div>

        <p>
          {completedTasks} of {tasks.length} tasks completed
        </p>
      </div>

      {saving && <p>Saving your goals...</p>}

      <div className="goal-task-list">
        {tasks.length === 0 ? (
          <div className="goal-empty">
            <Target size={32} />
            <h3>No tasks added yet</h3>
            <p>Add your first task to start your daily growth.</p>
          </div>
        ) : (
          tasks.map((task) => (
            <article className="goal-task" key={task.id}>
              <button
                type="button"
                className={`goal-check ${
                  task.completed ? "checked" : ""
                }`}
                onClick={() =>
                  toggleTask(task.id, task.completed)
                }
                aria-label="Toggle task completion"
              >
                {task.completed && <CheckCircle2 size={20} />}
              </button>

              <span className={task.completed ? "completed" : ""}>
                {task.title}
              </span>

              <button
                type="button"
                className="goal-delete"
                onClick={() => deleteTask(task.id)}
                disabled={saving || goalWindowClosed}
                aria-label="Delete task"
              >
                <Trash2 size={18} />
              </button>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default Goals;
