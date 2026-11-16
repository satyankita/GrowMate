
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Settings, Save, Clock, Target, ListChecks, Mic, MicOff, Volume2, Pause, Play, Square } from "lucide-react";
import useVoiceAssistant from "../hooks/useVoiceAssistant";
import "./ClassroomSettings.css";

const API_URL = "http://localhost:5000/api/classrooms";

function ClassroomSettings() {
  const { classroomId } = useParams();

  const [role, setRole] = useState("");
  const [form, setForm] = useState({
    dailyGoal: "",
    goalSettingTime: "09:00",
    reflectionTime: "17:00",
    tasksPerDay: 5,
    dayParts: [{ name: "Part 1", order: 1, startTime: "09:00", endTime: "17:00" }],
    timezone: "Asia/Kolkata",
    allowLateGoalEdits: false,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");
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

  useEffect(() => () => stopSpeech(), [stopSpeech]);

  const handleGoalVoiceInput = () => {
    if (listeningTarget === "classroom-goal") {
      stopListening();
      return;
    }
    startListening({
      target: "classroom-goal",
      onResult: (transcript) => setForm((previous) => ({
        ...previous,
        dailyGoal: `${previous.dailyGoal.trim()}${previous.dailyGoal.trim() ? " " : ""}${transcript}`,
      })),
    });
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/${classroomId}/settings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { classroom, role } = response.data;

        setRole(role);
        setForm({
          dailyGoal: classroom.dailyGoal || "",
          goalSettingTime: classroom.goalSettingTime || "09:00",
          reflectionTime: classroom.reflectionTime || "17:00",
          tasksPerDay: classroom.tasksPerDay || 5,
          dayParts: classroom.dayParts?.length ? classroom.dayParts : [{ name: "Part 1", order: 1, startTime: "09:00", endTime: "17:00" }],
          timezone: classroom.timezone || "Asia/Kolkata",
          allowLateGoalEdits: Boolean(classroom.allowLateGoalEdits),
        });
      } catch (error) {
        setMessage(
          error.response?.data?.message || "Could not load settings."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [classroomId, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: name === "tasksPerDay" ? Number(value) : value,
    }));
  };

  const updateDayPart = (index, key, value) => setForm((previous) => ({
    ...previous,
    dayParts: previous.dayParts.map((part, partIndex) => partIndex === index ? { ...part, [key]: value } : part),
  }));

  const addDayPart = () => setForm((previous) => previous.dayParts.length >= 12 ? previous : ({
    ...previous,
    dayParts: [...previous.dayParts, { name: `Part ${previous.dayParts.length + 1}`, order: previous.dayParts.length + 1, startTime: "09:00", endTime: "12:00" }],
  }));

  const removeDayPart = (index) => setForm((previous) => ({
    ...previous,
    dayParts: previous.dayParts.filter((_, partIndex) => partIndex !== index).map((part, partIndex) => ({ ...part, order: partIndex + 1 })),
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const response = await axios.put(
        `${API_URL}/${classroomId}/settings`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Could not save settings."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading classroom settings...</p>;

  const canEdit = ["HOST", "ADMIN"].includes(role);

  return (
    <section className="classroom-settings">
      <div className="settings-heading">
        <div>
          <span className="settings-label">CLASSROOM MANAGEMENT</span>
          <h2>Daily Growth Settings</h2>
          <p>Set the daily goal and schedule for your classroom.</p>
        </div>
        <Settings size={36} />
      </div>

      {!canEdit && (
        <p className="settings-notice">
          You can view these settings, but only the Host or Admin can edit them.
        </p>
      )}

      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="settings-field">
          <label htmlFor="dailyGoal">
            <Target size={18} /> Common Daily Classroom Goal
          </label>
          <textarea
            id="dailyGoal"
            name="dailyGoal"
            value={form.dailyGoal}
            onChange={handleChange}
            placeholder="Example: Complete one React topic and practice it."
            rows={4}
            disabled={!canEdit}
            required
          />
          <div className="settings-voice-tools">
            <button type="button" onClick={handleGoalVoiceInput} disabled={!canEdit} aria-pressed={listeningTarget === "classroom-goal"}>
              {listeningTarget === "classroom-goal" ? <MicOff size={16} /> : <Mic size={16} />}
              {listeningTarget === "classroom-goal" ? "Stop speaking" : "Speak classroom goal"}
            </button>
            <button type="button" onClick={() => speak(form.dailyGoal)} disabled={!form.dailyGoal.trim()}>
              <Volume2 size={16} /> Read classroom goal
            </button>
            {voiceError && <p role="alert">{voiceError}</p>}
            <p>Voice assistant: {listeningTarget === "classroom-goal" ? "Listening..." : speechStatus === "speaking" ? "Reading aloud..." : speechStatus === "paused" ? "Paused" : "Ready"}</p>
            <button type="button" onClick={pauseSpeech} disabled={speechStatus !== "speaking"}><Pause size={15} /> Pause</button>
            <button type="button" onClick={resumeSpeech} disabled={speechStatus !== "paused"}><Play size={15} /> Resume</button>
            <button type="button" onClick={stopSpeech} disabled={speechStatus === "idle" && listeningTarget === null}><Square size={14} /> Stop</button>
            <button type="button" onClick={toggleMute} aria-pressed={isMuted}><Volume2 size={15} /> {isMuted ? "Unmute" : "Mute"}</button>
          </div>
        </div>

        <div className="settings-field settings-day-parts">
          <label><ListChecks size={18} /> Daily goal parts</label>
          <small>Divide the shared daily cycle into one or more named parts with their own times.</small>
          {form.dayParts.map((part, index) => (
            <div className="settings-day-part" key={part.order}>
              <strong>Part {part.order}</strong>
              <input aria-label={`Part ${part.order} name`} value={part.name} onChange={(event) => updateDayPart(index, "name", event.target.value)} disabled={!canEdit} required />
              <label>Start <input type="time" value={part.startTime} onChange={(event) => updateDayPart(index, "startTime", event.target.value)} disabled={!canEdit} required /></label>
              <label>End <input type="time" value={part.endTime} onChange={(event) => updateDayPart(index, "endTime", event.target.value)} disabled={!canEdit} required /></label>
              {canEdit && form.dayParts.length > 1 && <button type="button" onClick={() => removeDayPart(index)} aria-label={`Remove ${part.name}`}>Remove</button>}
            </div>
          ))}
          {canEdit && <button type="button" onClick={addDayPart} disabled={form.dayParts.length >= 12}>Add day part</button>}
        </div>

        <div className="settings-field">
          <label htmlFor="timezone">Classroom timezone</label>
          <input id="timezone" name="timezone" value={form.timezone} onChange={handleChange} placeholder="Asia/Kolkata" disabled={!canEdit} required />
          <small>Use an IANA timezone, for example Asia/Kolkata or America/New_York.</small>
        </div>

        <div className="settings-field settings-late-goal">
          <label><input type="checkbox" checked={form.allowLateGoalEdits} onChange={(event) => setForm((previous) => ({ ...previous, allowLateGoalEdits: event.target.checked }))} disabled={!canEdit} /> Allow students to update goals after the deadline</label>
        </div>

        <div className="settings-field">
          <label htmlFor="goalSettingTime">
            <Clock size={18} /> Student goal-setting deadline
          </label>
          <input
            id="goalSettingTime"
            type="time"
            name="goalSettingTime"
            value={form.goalSettingTime}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
          <small>Students can create or edit today's personal goal until this time in the classroom timezone.</small>
        </div>

        <div className="settings-field">
          <label htmlFor="reflectionTime">
            <Clock size={18} /> Student reflection deadline
          </label>
          <input
            id="reflectionTime"
            type="time"
            name="reflectionTime"
            value={form.reflectionTime}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
          <small>Students can submit or edit today's reflection until this time in the classroom timezone.</small>
        </div>

        <div className="settings-field">
          <label htmlFor="tasksPerDay">
            <ListChecks size={18} /> Tasks per Student
          </label>
          <input
            id="tasksPerDay"
            type="number"
            name="tasksPerDay"
            min="1"
            max="20"
            value={form.tasksPerDay}
            onChange={handleChange}
            disabled={!canEdit}
            required
          />
          <small>Choose between 1 and 20 tasks.</small>
        </div>

        {message && <p className="settings-message">{message}</p>}

        {canEdit && (
          <button
            type="submit"
            className="settings-save-button"
            disabled={saving}
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Settings"}
          </button>
        )}
      </form>
    </section>
  );
}

export default ClassroomSettings;
