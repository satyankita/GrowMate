
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

function getToday(timezone = "Asia/Kolkata") {
  return new Intl.DateTimeFormat("en-CA", { timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

function GrowthTracker() {
  const { classroomId } = useParams();

  const [tasks, setTasks] = useState([]);
  const [assessment, setAssessment] = useState(null);
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const today = getToday(timezone);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        setLoading(true);
        setError("");

        const headers = { Authorization: `Bearer ${token}` };
        const [response, settingsResponse] = await Promise.all([
          axios.get(`${API_URL}/${classroomId}`, { headers, params: { date: today } }),
          axios.get(`http://localhost:5000/api/classrooms/${classroomId}/settings`, { headers }),
        ]);

        setTasks(response.data.goal?.tasks || []);
        const reflection = response.data.reflection;
        setAssessment(reflection?.assessmentScore == null ? null : {
          score: reflection.assessmentScore,
          correct: reflection.assessmentCorrect,
          total: reflection.assessmentTotal,
          assessedAt: reflection.assessedAt,
        });
        if (settingsResponse.data.classroom.timezone) setTimezone(settingsResponse.data.classroom.timezone);
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

      <div className={`growth-progress-card ${assessment ? "has-assessment" : "awaiting-assessment"}`}>
        <div className="growth-progress-top">
          <div>
            <span>AI reflection assessment</span>
            <h3>{assessment ? `${assessment.score}%` : "Not assessed yet"}</h3>
          </div>

          <Target size={34} />
        </div>

        <div className="growth-progress-track" role="meter" aria-label="AI reflection assessment score" aria-valuemin="0" aria-valuemax="100" aria-valuenow={assessment?.score ?? 0}>
          <div style={{ width: `${assessment?.score ?? 0}%` }} />
        </div>

        <p>
          {assessment
            ? `${assessment.correct} of ${assessment.total} reflection answers were assessed as correct${assessment.assessedAt ? ` · Assessed ${new Date(assessment.assessedAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}` : ""}.`
            : "Complete the AI assessment on your Reflection page to measure your score here."}
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
