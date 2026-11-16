
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
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
  Volume2,
  Pause,
  Play,
  Square,
  Mic,
  MicOff,
  ClipboardCheck,
  Award,
} from "lucide-react";
import useVoiceAssistant from "../hooks/useVoiceAssistant";

import "./Reflection.css";

const API_URL = "https://growmate-backend-jpp4.onrender.com/api/daily-growth";
const CLASSROOM_API = "https://growmate-backend-jpp4.onrender.com/api/classrooms";
const AI_API_URL = "https://growmate-backend-jpp4.onrender.com/api/ai-reflection";

function getToday(timezone = "Asia/Kolkata") {
  return new Intl.DateTimeFormat("en-CA", { timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

function Reflection() {
  const { classroomId } = useParams();
  const token = localStorage.getItem("token");

  const [reflection, setReflection] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [classroomSettings, setClassroomSettings] = useState(null);
  const today = getToday(classroomSettings?.timezone);

  const [aiQuestions, setAiQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [answerFeedback, setAnswerFeedback] = useState({});
  const [feedbackLoadingIndex, setFeedbackLoadingIndex] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [taskSummary, setTaskSummary] = useState(null);
  const [assessment, setAssessment] = useState(null);
  const [assessmentLoading, setAssessmentLoading] = useState(false);

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

  const {
    speak: speakText,
    pauseSpeech,
    resumeSpeech,
    stopSpeech,
    toggleMute,
    startListening,
    stopListening,
    speechStatus,
    isMuted,
    listeningTarget: listeningIndex,
    voiceError,
  } = useVoiceAssistant();

  const headers = useMemo(
    () => ({ Authorization: `Bearer ${token}` }),
    [token]
  );

  const reflectionWindowClosed = Boolean(classroomSettings && (() => {
    const now = new Intl.DateTimeFormat("en-GB", {
      timeZone: classroomSettings.timezone || "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).format(new Date(clock)).split(":").map(Number);
    const [closeHour, closeMinute] = (classroomSettings.reflectionTime || "17:00").split(":").map(Number);
    return now[0] * 60 + now[1] > closeHour * 60 + closeMinute;
  })());

  useEffect(() => () => stopSpeech(), [stopSpeech]);

  useEffect(() => {
    const fetchReflectionData = async () => {
      try {
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
          if (data.reflection.assessmentScore !== null && data.reflection.assessmentScore !== undefined) {
            setAssessment({
              assessmentScore: data.reflection.assessmentScore,
              assessmentCorrect: data.reflection.assessmentCorrect,
              assessmentTotal: data.reflection.assessmentTotal,
              assessmentDetails: data.reflection.assessmentDetails,
              assessedAt: data.reflection.assessedAt,
            });
          }
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

    if (classroomId && token) fetchReflectionData();
  }, [classroomId, headers, today, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reflection.trim() || saving || reflectionWindowClosed) return;

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

  const handleVoiceAnswer = (index) => {
    if (listeningIndex === index) {
      stopListening();
      return;
    }
    startListening({
      target: index,
      onResult: (transcript) => {
        setAnswers((previous) => ({
          ...previous,
          [index]: previous[index]
            ? `${previous[index]} ${transcript}`
            : transcript,
        }));
      },
    });
  };

  const handleGetFeedback = async (index, question) => {
    const answer = answers[index]?.trim();
    if (!answer || feedbackLoadingIndex !== null) return;

    try {
      setFeedbackLoadingIndex(index);
      setAiError("");
      const response = await axios.post(
        `${AI_API_URL}/${classroomId}/feedback`,
        { question, answer },
        { headers }
      );
      setAnswerFeedback((current) => ({ ...current, [index]: response.data.feedback }));
    } catch (err) {
      setAiError(err.response?.data?.message || "Could not get feedback for this answer.");
    } finally {
      setFeedbackLoadingIndex(null);
    }
  };

  const handleGenerateQuestions = async () => {
    try {
      setAiLoading(true);
      setAiError("");
      setAiQuestions([]);
      setAnswers({});
      setAssessment(null);

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

  const handleAssessAnswers = async () => {
    if (aiQuestions.some((_, index) => !answers[index]?.trim()) || assessmentLoading) return;
    try {
      setAssessmentLoading(true);
      setAiError("");
      const response = await axios.post(`${AI_API_URL}/${classroomId}/assessment`, {
        date: today,
        answers: aiQuestions.map((question, index) => ({ question, answer: answers[index].trim() })),
      }, { headers });
      setAssessment(response.data.assessment);
    } catch (err) {
      setAiError(err.response?.data?.message || "Could not assess your answers. Please try again.");
    } finally {
      setAssessmentLoading(false);
    }
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);
  const allAnswersComplete = aiQuestions.length > 0 && aiQuestions.every((_, index) => Boolean(answers[index]?.trim()));

  const handleEdit = () => {
    if (reflectionWindowClosed) return;
    setAssessment(null);
    setAiQuestions([]);
    setAnswers({});
    setAnswerFeedback({});
    setSubmitted(false);
  };

  if (!classroomId || !token) {
    return <p className="reflection-error">Please log in to access your reflection.</p>;
  }

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
            Reflection closes at{" "}
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
      {reflectionWindowClosed && <p className="reflection-error" role="status">The reflection window is closed. Ask your classroom owner or admin to adjust the reflection deadline if you still need to submit or edit today's reflection.</p>}

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
            disabled={saving || reflectionWindowClosed}
          />

          <button type="submit" disabled={!reflection.trim() || saving || reflectionWindowClosed}>
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

          <button type="button" onClick={handleEdit} disabled={reflectionWindowClosed}>
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
              <div className={`voice-assistant-panel ${speechStatus} ${listeningIndex !== null ? "listening" : ""}`}>
                <div className="voice-assistant-intro">
                  <div className="voice-assistant-orb" aria-hidden="true">
                    <div className="voice-orb-core"><Sparkles size={23} /></div>
                    <span className="voice-orb-ring voice-orb-ring-one" />
                    <span className="voice-orb-ring voice-orb-ring-two" />
                  </div>
                  <div className="voice-assistant-copy">
                    <span className="voice-eyebrow">GROWMATE VOICE ASSISTANT</span>
                    <h4>Your reflection, your voice</h4>
                    <p>Listen to a question or share your answer out loud.</p>
                    <div className="voice-live-status" role="status" aria-live="polite">
                      {listeningIndex !== null ? (
                        <><span className="voice-status-dot recording" /> Listening to answer {listeningIndex + 1}</>
                      ) : speechStatus === "speaking" ? (
                        <><span className="voice-status-dot playing" /> Reading aloud <span className="voice-wave" aria-label="Speech is playing"><i /><i /><i /><i /><i /><i /><i /></span></>
                      ) : speechStatus === "paused" ? (
                        <><span className="voice-status-dot paused" /> Playback paused</>
                      ) : (
                        <><span className="voice-status-dot" /> Ready when you are</>
                      )}
                    </div>
                  </div>
                </div>

                <div className="voice-controls" aria-label="Speech playback controls">
                  <button className="voice-control-button" type="button" onClick={pauseSpeech} disabled={speechStatus !== "speaking"}>
                    <Pause size={16} /> Pause
                  </button>
                  <button className="voice-control-button" type="button" onClick={resumeSpeech} disabled={speechStatus !== "paused"}>
                    <Play size={16} /> Resume
                  </button>
                  <button className="voice-control-button" type="button" onClick={stopSpeech} disabled={speechStatus === "idle"}>
                    <Square size={15} /> Stop
                  </button>
                  <button className={`voice-control-button mute-control ${isMuted ? "muted" : ""}`} type="button" onClick={toggleMute} aria-pressed={isMuted}>
                    {isMuted ? <MicOff size={16} /> : <Volume2 size={16} />}
                    {isMuted ? "Unmute" : "Mute"}
                  </button>
                </div>
                {voiceError && <p className="voice-error" role="alert">{voiceError}</p>}
              </div>

              <div className="question-list-heading">
                <div>
                  <span className="voice-eyebrow">A MOMENT TO REFLECT</span>
                  <h4>Your personalized questions</h4>
                </div>
                <span className="question-count">{aiQuestions.length} prompts</span>
              </div>

              {taskSummary && (
                <p className="ai-task-summary">
                  Tasks: {taskSummary.completed} completed,{" "}
                  {taskSummary.pending} pending out of {taskSummary.total}
                </p>
              )}

              {aiQuestions.map((question, index) => (
                <div className="ai-question-card" key={index}>
                  <div className="question-card-heading">
                    <div className="question-number">{String(index + 1).padStart(2, "0")}</div>
                    <label htmlFor={`ai-answer-${index}`}>{question}</label>
                    <button className="listen-question-button" type="button" onClick={() => speakText(question)} disabled={isMuted}>
                      <Volume2 size={16} /> <span>Listen</span>
                    </button>
                  </div>

                  <div className={`answer-entry ${listeningIndex === index ? "answer-entry-listening" : ""}`}>
                    <textarea
                      id={`ai-answer-${index}`}
                      rows={3}
                      placeholder="Write your answer or use the microphone..."
                      value={answers[index] || ""}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                    />
                    <button
                      className={`answer-mic-button ${listeningIndex === index ? "is-listening" : ""}`}
                      type="button"
                      onClick={() => handleVoiceAnswer(index)}
                      disabled={listeningIndex !== null && listeningIndex !== index}
                      aria-label={listeningIndex === index ? `Stop recording answer ${index + 1}` : `Speak answer ${index + 1}`}
                      aria-pressed={listeningIndex === index}
                      title={listeningIndex === index ? "Stop recording" : "Speak your answer"}
                    >
                      {listeningIndex === index ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                  </div>
                  <div className="answer-entry-footer">
                    {listeningIndex === index ? (
                      <span className="recording-indicator"><i /> Listening… speak naturally</span>
                    ) : (
                      <span className="answer-hint">Your spoken answer will appear here</span>
                    )}
                    <button className="read-answer-button" type="button" onClick={() => speakText(answers[index] || "")} disabled={isMuted || !answers[index]?.trim()}>
                      <Volume2 size={14} /> Read answer
                    </button>
                  </div>
                  <div className="answer-feedback-actions">
                    <button type="button" onClick={() => handleGetFeedback(index, question)} disabled={!answers[index]?.trim() || feedbackLoadingIndex !== null}>
                      {feedbackLoadingIndex === index ? "Getting feedback..." : "Get AI feedback"}
                    </button>
                    {answerFeedback[index] && (
                      <>
                        <p>{answerFeedback[index]}</p>
                        <button type="button" onClick={() => speakText(answerFeedback[index])} disabled={isMuted}>
                          <Volume2 size={14} /> Read feedback aloud
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}

              <section className="reflection-assessment" aria-live="polite">
                <div className="reflection-assessment-copy">
                  <span className="voice-eyebrow">YOUR LEARNING CHECK-IN</span>
                  <h4><ClipboardCheck size={19} /> AI Growth Assessment</h4>
                  <p>Answer all {aiQuestions.length} questions to get a score based on how well your answers address them.</p>
                </div>
                <button type="button" className="assessment-button" onClick={handleAssessAnswers} disabled={!allAnswersComplete || assessmentLoading}>
                  {assessmentLoading ? <><Loader2 size={17} className="ai-spinner" /> Assessing answers…</> : <><Award size={17} /> {assessment ? "Reassess answers" : "Assess my answers"}</>}
                </button>
                {!allAnswersComplete && <small className="assessment-hint">Complete every answer to unlock your assessment.</small>}
                {assessment && (
                  <div className="assessment-result">
                    <div className="assessment-score-number"><strong>{assessment.assessmentScore}%</strong><span>AI assessment score</span></div>
                    <div className="assessment-meter" role="meter" aria-label="AI assessment score" aria-valuemin="0" aria-valuemax="100" aria-valuenow={assessment.assessmentScore}>
                      <span style={{ width: `${assessment.assessmentScore}%` }} />
                    </div>
                    <p>{assessment.assessmentCorrect} of {assessment.assessmentTotal} answers addressed the questions well.</p>
                    {Array.isArray(assessment.assessmentDetails) && assessment.assessmentDetails.length > 0 && (
                      <ul className="assessment-answer-list">
                        {assessment.assessmentDetails.map((item, index) => (
                          <li className={item.correct ? "assessment-answer-correct" : "assessment-answer-review"} key={`${index}-${item.question}`}>
                            <span>{item.correct ? <CheckCircle2 size={16} /> : <Circle size={16} />}</span>
                            <div><strong>Question {index + 1}: {item.correct ? "Well answered" : "Needs another look"}</strong>{item.feedback && <small>{item.feedback}</small>}</div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </section>

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
