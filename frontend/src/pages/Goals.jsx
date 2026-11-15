
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Target,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
} from "lucide-react";

import "./Goals.css";

const API_URL = "http://localhost:5000/api/daily-growth";
const CLASSROOM_API = "http://localhost:5000/api/classrooms";

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function Goals() {
  const { classroomId } = useParams();

  const [goal, setGoal] = useState("");
  const [tasks, setTasks] = useState([]);
  const [classroomSettings, setClassroomSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const today = getToday();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        setLoading(true);
        setError("");

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

    if (classroomId && token) {
      fetchGoals();
    } else {
      setError("Please log in to access your goals.");
      setLoading(false);
    }
  }, [classroomId, token, today]);

  const taskLimit = classroomSettings?.tasksPerDay || 5;
  const limitReached = tasks.length >= taskLimit;

  const saveTasks = async (updatedTasks) => {
    try {
      setSaving(true);
      setError("");

      const response = await axios.put(
        `${API_URL}/${classroomId}/goal`,
        {
          date: today,
          tasks: updatedTasks.map((task) => ({
          id: task.id,
          title: task.title,
          completed: task.completed,
        })),

        
        },
        { headers }
      );

      setTasks(response.data.goal.tasks);
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
    } catch (err) {
      console.error("Update Task Error:", err);
      setError(
        err.response?.data?.message || "Could not update task."
      );
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
              Goal Setting: {classroomSettings.goalSettingTime || "Not set"}
            </span>

            <span>
              <Clock size={15} />
              Reflection: {classroomSettings.reflectionTime || "Not set"}
            </span>
          </div>
        </div>
      )}

      <form className="goal-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder={
            limitReached
              ? "Daily task limit reached"
              : "Enter your task..."
          }
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          disabled={saving || limitReached}
        />

        <button
          type="submit"
          disabled={saving || !goal.trim() || limitReached}
        >
          <Plus size={18} />
          Add Task
        </button>
      </form>

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
