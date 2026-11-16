import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Bell, Volume2, Pause, Play, Square, MicOff } from "lucide-react";
import useVoiceAssistant from "../hooks/useVoiceAssistant";
import "./ClassroomNotifications.css";

const API_URL = "http://localhost:5000/api/classrooms";

function ClassroomNotifications({ classroomId: classroomIdProp }) {
  const params = useParams();
  const classroomId = classroomIdProp || params.classroomId;
  const token = localStorage.getItem("token");
  const headers = useMemo(() => ({ Authorization: `Bearer ${token}` }), [token]);
  const [notifications, setNotifications] = useState([]);
  const [role, setRole] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const { speak, pauseSpeech, resumeSpeech, stopSpeech, toggleMute, speechStatus, isMuted, voiceError } = useVoiceAssistant();

  useEffect(() => () => stopSpeech(), [stopSpeech]);

  useEffect(() => {
    let active = true;
    const loadNotifications = async () => {
      try {
        const endpoint = classroomId
          ? `${API_URL}/${classroomId}/notifications`
          : `${API_URL}/notifications`;
        const [notificationResponse, settingsResponse] = await Promise.all([
          axios.get(endpoint, { headers }),
          classroomId ? axios.get(`${API_URL}/${classroomId}/settings`, { headers }) : Promise.resolve(null),
        ]);
        if (!active) return;
        setNotifications(notificationResponse.data);
        setRole(settingsResponse?.data?.role || "");
      } catch (loadError) {
        if (active) setError(loadError.response?.data?.message || "Could not load classroom notifications.");
      } finally {
        if (active) setLoading(false);
      }
    };

    loadNotifications();
    const refreshTimer = window.setInterval(loadNotifications, 60000);
    return () => {
      active = false;
      window.clearInterval(refreshTimer);
    };
  }, [classroomId, headers]);

  const markRead = async (notification) => {
    if (notification.isRead) return true;
    try {
      const endpoint = classroomId
        ? `${API_URL}/${classroomId}/notifications/${notification.id}/read`
        : `${API_URL}/notifications/${notification.id}/read`;
      await axios.patch(endpoint, {}, { headers });
      setNotifications((current) => current.map((item) => item.id === notification.id ? { ...item, isRead: true } : item));
      return true;
    } catch (readError) {
      setError(readError.response?.data?.message || "Could not update notification status.");
      return false;
    }
  };

  const listenTo = async (notification) => {
    if (!await markRead(notification)) return;
    speak(`${notification.classroom?.name ? `${notification.classroom.name}. ` : ""}${notification.title}. ${notification.content}`);
  };

  const publishAnnouncement = async (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim() || saving || !classroomId) return;
    try {
      setSaving(true);
      setError("");
      await axios.post(`${API_URL}/${classroomId}/notifications`, { title: title.trim(), content: content.trim() }, { headers });
      setTitle("");
      setContent("");
      const response = await axios.get(`${API_URL}/${classroomId}/notifications`, { headers });
      setNotifications(response.data);
    } catch (publishError) {
      setError(publishError.response?.data?.message || "Could not publish the announcement.");
    } finally {
      setSaving(false);
    }
  };

  const unreadCount = notifications.filter((notification) => !notification.isRead).length;

  if (loading) return <section className="classroom-notifications"><h2><Bell size={18} /> Notifications</h2><p>Loading notifications...</p></section>;

  return (
    <section className="classroom-notifications" aria-label="Classroom notifications">
      <h2><Bell size={18} /> Classroom notifications ({unreadCount} unread)</h2>
      <div className="notification-voice-controls" aria-label="Voice playback controls">
        <button type="button" onClick={pauseSpeech} disabled={speechStatus !== "speaking"}><Pause size={15} /> Pause</button>
        <button type="button" onClick={resumeSpeech} disabled={speechStatus !== "paused"}><Play size={15} /> Resume</button>
        <button type="button" onClick={stopSpeech} disabled={speechStatus === "idle"}><Square size={14} /> Stop</button>
        <button type="button" onClick={toggleMute} aria-pressed={isMuted}><MicOff size={15} /> {isMuted ? "Unmute" : "Mute"}</button>
      </div>
      {(error || voiceError) && <p role="alert">{error || voiceError}</p>}

      {classroomId && ["HOST", "ADMIN"].includes(role) && (
        <form className="notification-composer" onSubmit={publishAnnouncement}>
          <h3>Post a classroom announcement</h3>
          <label htmlFor="announcement-title">Title</label>
          <input id="announcement-title" value={title} onChange={(event) => setTitle(event.target.value)} maxLength={140} required />
          <label htmlFor="announcement-content">Announcement</label>
          <textarea id="announcement-content" value={content} onChange={(event) => setContent(event.target.value)} maxLength={5000} rows={3} required />
          <button type="submit" disabled={saving}>{saving ? "Publishing..." : "Publish announcement"}</button>
        </form>
      )}

      {!notifications.length ? <p>No classroom notifications yet.</p> : (
        <ul className="notification-list">
          {notifications.map((notification) => (
            <li className={`notification-card ${notification.isRead ? "is-read" : "is-unread"}`} key={notification.id}>
              <p className="notification-meta">{notification.isRead ? "Read" : "Unread"} · {notification.classroom?.name || "Classroom"} · {notification.type.replaceAll("_", " ")}</p>
              <h3>{notification.title}</h3>
              <p>{notification.content}</p>
              <button type="button" onClick={() => listenTo(notification)}><Volume2 size={15} /> Listen</button>
              {!notification.isRead && <button type="button" onClick={() => markRead(notification)}>Mark as read</button>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ClassroomNotifications;
