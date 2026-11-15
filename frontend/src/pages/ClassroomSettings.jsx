
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Settings, Save, Clock, Target, ListChecks } from "lucide-react";
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
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

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
        </div>

        <div className="settings-field">
          <label htmlFor="goalSettingTime">
            <Clock size={18} /> Goal Setting Time
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
        </div>

        <div className="settings-field">
          <label htmlFor="reflectionTime">
            <Clock size={18} /> Daily Reflection Time
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
