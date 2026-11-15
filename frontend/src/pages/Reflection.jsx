
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  BookOpen,
  Send,
  CheckCircle2,
  Clock,
  Target,
  Circle,
  Sparkles,
  Loader2,
} from "lucide-react";

import "./Reflection.css";

const API_URL = "http://localhost:5000/api/daily-growth";
const CLASSROOM_API = "http://localhost:5000/api/classrooms";
const AI_API_URL = "http://localhost:5000/api/ai-reflection";

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function Reflection() {
  const { classroomId } = useParams();

  const [reflection, setReflection] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [classroomSettings, setClassroomSettings] = useState(null);

  const [aiQuestions, setAiQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [taskSummary, setTaskSummary] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const today = getToday();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const fetchReflectionData = async () => {
      try {
        setLoading(true);
        setError("");

        const [growthResponse, settingsResponse] = await Promise.all([
          axios.get(`${API_URL}/${classroomId}`, {
            headers,
            params: { date: today },
          }),
          axios.get(`${CLASSROOM_API}/${classroomId}/settings`, {
            headers,
          }),
        ]);

        const data = growthResponse.data;

        setTasks(data.goal?.tasks || []);
        setClassroomSettings(settingsResponse.data.classroom);

        if (data.reflection) {
          setReflection(data.reflection.content);
          setSubmitted(true);
        }
      } catch (err) {
        console.error("Fetch Reflection Error:", err);
        setError(
          err.response?.data?.message || "Could not load your reflection."
        );
      } finally {
        setLoading(false);
      }
    };

    if (classroomId && token) {
      fetchReflectionData();
    } else {
      setError("Please log in to access your reflection.");
      setLoading(false);
    }
  }, [classroomId, token, today]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reflection.trim() || saving) return;

    try {
      setSaving(true);
      setError("");

      await axios.put(
        `${API_URL}/${classroomId}/reflection`,
        {
          date: today,
          content: reflection.trim(),
        },
        { headers }
      );

      setSubmitted(true);
    } catch (err) {
      console.error("Save Reflection Error:", err);
      setError(
        err.response?.data?.message || "Could not save your reflection."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleGenerateQuestions = async () => {
    try {
      setAiLoading(true);
      setAiError("");
      setAiQuestions([]);
      setAnswers({});

      const response = await axios.post(
        `${AI_API_URL}/${classroomId}/questions`,
        { date: today },
        { headers }
      );

      setAiQuestions(response.data.questions || []);
      setTaskSummary(response.data.taskSummary || null);
    } catch (err) {
      console.error("AI Questions Error:", err);
      setAiError(
        err.response?.data?.message ||
          "Could not generate AI questions. Please try again."
      );
    } finally {
      setAiLoading(false);
    }
  };

  const handleAnswerChange = (index, value) => {
    setAnswers((previous) => ({
      ...previous,
      [index]: value,
    }));
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  const handleEdit = () => {
    setSubmitted(false);
  };

  if (loading) {
    return <p>Loading your reflection...</p>;
  }

  return (
    <section className="reflection-page">
      <div className="reflection-heading">
        <div>
          <span className="reflection-label">DAILY GROWTH</span>
          <h2>Daily Reflection</h2>
          <p>Take a moment to understand your progress today.</p>
        </div>
        <BookOpen size={38} />
      </div>

      {classroomSettings && (
        <div className="reflection-common-goal">
          <h3>
            <Target size={19} />
            Today's Classroom Goal
          </h3>

          <p>
            {classroomSettings.dailyGoal ||
              "No common goal has been set yet."}
          </p>

          <div className="reflection-schedule">
            <Clock size={16} />
            Reflection Time:{" "}
            {classroomSettings.reflectionTime || "Not set"}
          </div>
        </div>
      )}

      <div className="reflection-task-summary">
        <h3>Today's Task Summary</h3>

        <p>
          Completed: {completedTasks.length} / {tasks.length}
          {" | "}
          Pending: {pendingTasks.length}
        </p>

        {tasks.length === 0 ? (
          <p>No daily tasks found. Add your goals first.</p>
        ) : (
          <div className="reflection-task-list">
            {tasks.map((task) => (
              <div className="reflection-task-item" key={task.id}>
                {task.completed ? (
                  <CheckCircle2 size={19} />
                ) : (
                  <Circle size={19} />
                )}
                <span>{task.title}</span>
                <small>
                  {task.completed ? "Completed" : "Pending"}
                </small>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="reflection-error">{error}</p>}

      {!submitted ? (
        <form className="reflection-form" onSubmit={handleSubmit}>
          <label htmlFor="reflection">How was your day?</label>

          <p>
            What did you complete? What challenges did you face?
            What did you learn today?
          </p>

          <textarea
            id="reflection"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Write your thoughts here..."
            rows={8}
            disabled={saving}
          />

          <button type="submit" disabled={!reflection.trim() || saving}>
            <Send size={17} />
            {saving ? "Saving..." : "Submit Reflection"}
          </button>
        </form>
      ) : (
        <div className="reflection-success">
          <CheckCircle2 size={42} />
          <h3>Reflection saved!</h3>
          <p>Your thoughts have been recorded for today.</p>

          <div className="reflection-answer">{reflection}</div>

          <button type="button" onClick={handleEdit}>
            Edit Reflection
          </button>
        </div>
      )}

      {submitted && (
        <div className="ai-reflection-section">
          <div className="ai-reflection-heading">
            <Sparkles size={25} />
            <div>
              <h3>AI Reflection Assistant</h3>
              <p>
                Get personalized questions based on your goals and daily
                reflection.
              </p>
            </div>
          </div>

          {!aiQuestions.length && (
            <button
              type="button"
              className="ai-generate-button"
              onClick={handleGenerateQuestions}
              disabled={aiLoading}
            >
              {aiLoading ? (
                <>
                  <Loader2 size={18} className="ai-spinner" />
                  Generating Questions...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Generate AI Questions
                </>
              )}
            </button>
          )}

          {aiError && <p className="reflection-error">{aiError}</p>}

          {aiQuestions.length > 0 && (
            <div className="ai-questions-container">
              <h4>Your Personalized Questions</h4>

              {taskSummary && (
                <p className="ai-task-summary">
                  Tasks: {taskSummary.completed} completed,{" "}
                  {taskSummary.pending} pending out of {taskSummary.total}
                </p>
              )}

              {aiQuestions.map((question, index) => (
                <div className="ai-question-card" key={index}>
                  <label htmlFor={`ai-answer-${index}`}>
                    <span>{index + 1}.</span> {question}
                  </label>

                  <textarea
                    id={`ai-answer-${index}`}
                    rows={3}
                    placeholder="Write your answer here..."
                    value={answers[index] || ""}
                    onChange={(e) =>
                      handleAnswerChange(index, e.target.value)
                    }
                  />
                </div>
              ))}

              <button
                type="button"
                className="ai-generate-button"
                onClick={handleGenerateQuestions}
                disabled={aiLoading}
              >
                <Sparkles size={18} />
                Generate New Questions
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Reflection;
