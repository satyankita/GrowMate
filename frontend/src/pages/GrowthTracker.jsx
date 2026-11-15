
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  TrendingUp,
  Target,
  CheckCircle2,
  Clock,
} from "lucide-react";

import "./GrowthTracker.css";

const API_URL = "http://localhost:5000/api/daily-growth";

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function GrowthTracker() {
  const { classroomId } = useParams();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const today = getToday();

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `${API_URL}/${classroomId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: { date: today },
          }
        );

        setTasks(response.data.goal?.tasks || []);
      } catch (err) {
        console.error("Growth Tracker Error:", err);
        setError(
          err.response?.data?.message ||
          "Could not load your growth progress."
        );
      } finally {
        setLoading(false);
      }
    };

    if (classroomId && token) {
      fetchProgress();
    } else {
      setError("Please log in to view your progress.");
      setLoading(false);
    }
  }, [classroomId, token, today]);

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.length - completedTasks;
  const totalTasks = tasks.length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  if (loading) {
    return <p>Loading your growth progress...</p>;
  }

  return (
    <section className="growth-page">
      <div className="growth-heading">
        <div>
          <span className="growth-label">YOUR JOURNEY</span>
          <h2>Growth Tracker</h2>
          <p>Track your progress and celebrate small achievements.</p>
        </div>

        <TrendingUp size={38} />
      </div>

      {error && <p className="growth-error">{error}</p>}

      <div className="growth-progress-card">
        <div className="growth-progress-top">
          <div>
            <span>Today's progress</span>
            <h3>{progress}%</h3>
          </div>

          <Target size={34} />
        </div>

        <div className="growth-progress-track">
          <div style={{ width: `${progress}%` }} />
        </div>

        <p>
          {totalTasks === 0
            ? "Add your first goal to start tracking progress."
            : "Keep going! Every small step matters."}
        </p>
      </div>

      <div className="growth-stats">
        <article className="growth-stat-card">
          <CheckCircle2 size={25} />
          <h3>{completedTasks}</h3>
          <p>Completed Tasks</p>
        </article>

        <article className="growth-stat-card">
          <Clock size={25} />
          <h3>{pendingTasks}</h3>
          <p>Pending Tasks</p>
        </article>

        <article className="growth-stat-card">
          <Target size={25} />
          <h3>{totalTasks}</h3>
          <p>Total Tasks</p>
        </article>
      </div>

      <div className="growth-message">
        <h3>Your growth matters 🌱</h3>
        <p>
          Progress is not about being perfect. It is about learning,
          reflecting and improving every day.
        </p>
      </div>
    </section>
  );
}

export default GrowthTracker;
