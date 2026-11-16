import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useVoiceAssistant from "../hooks/useVoiceAssistant";

const CLASSROOM_API = "https://growmate-backend-jpp4.onrender.com/api/classrooms";
const GROWTH_API = "https://growmate-backend-jpp4.onrender.com/api/daily-growth";

const VALID_TIME = /^([01]\d|2[0-3]):[0-5]\d$/;
const GOAL_REMINDER_LEAD_MINUTES = 30;

function getTimezone(timezone) {
  try {
    new Intl.DateTimeFormat("en-CA", { timeZone: timezone || "Asia/Kolkata" });
    return timezone || "Asia/Kolkata";
  } catch {
    return "Asia/Kolkata";
  }
}

function getToday(timezone, now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: getTimezone(timezone),
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

function getCurrentMinute(timezone, now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: getTimezone(timezone),
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const hour = Number(parts.find((part) => part.type === "hour")?.value || 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value || 0);
  return hour * 60 + minute;
}

function timeToMinutes(value) {
  if (!VALID_TIME.test(value || "")) return null;
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

function getReminderStatus(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setReminderStatus(key, status) {
  try {
    localStorage.setItem(key, status);
  } catch {
    // Session refs still prevent duplicates if browser storage is unavailable.
  }
}

function isReminderResolved(key) {
  const status = getReminderStatus(key);
  return status === "announced" || status === "reflection-submitted";
}

function claimReminder(key, claimValue) {
  try {
    const status = localStorage.getItem(key);
    if (status === "announced" || status === "reflection-submitted") return false;
    if (status?.startsWith("pending:")) {
      const expiresAt = Number(status.slice("pending:".length));
      if (Number.isFinite(expiresAt) && expiresAt > Date.now()) return false;
    }
    localStorage.setItem(key, claimValue);
  } catch {
    // The in-memory pending set still prevents duplicates in this page session.
  }
  return true;
}

function releaseReminderClaim(key, claimValue) {
  try {
    if (localStorage.getItem(key) === claimValue) localStorage.removeItem(key);
  } catch {
    // Storage may be blocked by the browser; the claim will also expire by timeout.
  }
}

function ClassroomScheduleVoiceReminders({ classroomId }) {
  const token = localStorage.getItem("token");
  const [schedule, setSchedule] = useState(null);
  const [dailyTasks, setDailyTasks] = useState([]);
  const [clock, setClock] = useState(() => new Date());
  const [loadError, setLoadError] = useState("");
  const checkingRef = useRef(false);
  const pendingRemindersRef = useRef(new Map());
  const completedRemindersRef = useRef(new Set());
  const timezone = getTimezone(schedule?.timezone);
  const today = getToday(timezone, clock);
  const { speak, stopSpeech, voiceError, speechStatus } = useVoiceAssistant();

  useEffect(() => () => stopSpeech(), [stopSpeech]);

  useEffect(() => {
    let active = true;
    const headers = { Authorization: `Bearer ${token}` };

    axios.get(`${CLASSROOM_API}/${classroomId}/settings`, { headers }).then((settingsResponse) => {
      if (!active) return;
      setSchedule(settingsResponse.data.classroom);
    }).catch((error) => {
      if (active) setLoadError(error.response?.data?.message || "Could not load classroom voice reminders.");
    });

    return () => { active = false; };
  }, [classroomId, token]);

  // Keep the displayed day current in the classroom's timezone, including across midnight.
  useEffect(() => {
    const intervalId = window.setInterval(() => setClock(new Date()), 30000);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!schedule || !token) return undefined;
    let active = true;
    const requestDate = today;

    axios.get(`${GROWTH_API}/${classroomId}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { date: requestDate },
    }).then((growthResponse) => {
      if (active) setDailyTasks(growthResponse.data.goal?.tasks || []);
    }).catch((error) => {
      if (active) setLoadError(error.response?.data?.message || "Could not load today's classroom goals for voice reminders.");
    });

    return () => { active = false; };
  }, [classroomId, schedule, today, token]);

  useEffect(() => {
    if (!schedule || !token) return undefined;
    let active = true;
    const pendingReminders = pendingRemindersRef.current;

    const clearPendingReminder = (key) => {
      const pending = pendingRemindersRef.current.get(key);
      if (pending?.timeoutId) window.clearTimeout(pending.timeoutId);
      pendingRemindersRef.current.delete(key);
      if (pending?.claimValue) releaseReminderClaim(key, pending.claimValue);
    };

    const announceReminder = (kind, date, time, message) => {
      const key = `growmate-voice-reminder:v2:${classroomId}:${date}:${kind}:${time}`;
      if (completedRemindersRef.current.has(key) || isReminderResolved(key) || pendingRemindersRef.current.has(key)) return false;

      // Reserve only while speech is pending. A reminder is completed only from onStart.
      const claimValue = `pending:${Date.now() + 15000}:${Math.random().toString(36).slice(2)}`;
      if (!claimReminder(key, claimValue)) return false;
      const timeoutId = window.setTimeout(() => clearPendingReminder(key), 15000);
      pendingRemindersRef.current.set(key, { timeoutId, claimValue });

      const accepted = speak(message, {
        onStart: () => {
          clearPendingReminder(key);
          completedRemindersRef.current.add(key);
          setReminderStatus(key, "announced");
        },
        onError: () => clearPendingReminder(key),
      });

      if (!accepted) clearPendingReminder(key);
      return accepted;
    };

    const checkReminders = async () => {
      if (!active || checkingRef.current || speechStatus !== "idle") return;
      checkingRef.current = true;
      try {
        const now = new Date();
        const currentDate = getToday(timezone, now);
        const currentMinute = getCurrentMinute(timezone, now);
        const goalDeadline = timeToMinutes(schedule.goalSettingTime);
        const goalReminderStart = goalDeadline === null
          ? null
          : Math.max(0, goalDeadline - GOAL_REMINDER_LEAD_MINUTES);

        if (goalReminderStart !== null && currentMinute >= goalReminderStart && currentMinute < goalDeadline) {
          const pendingTasks = dailyTasks.filter((task) => !task.completed);
          const minutesRemaining = goalDeadline - currentMinute;
          announceReminder(
            "goal-setting",
            currentDate,
            schedule.goalSettingTime,
            `Your goal-setting deadline is in about ${minutesRemaining} ${minutesRemaining === 1 ? "minute" : "minutes"}. Today's classroom goal is ${schedule.dailyGoal || "not set yet"}. ${pendingTasks.length ? `Pending tasks: ${pendingTasks.map((task) => task.title).join(", ")}.` : "Review your goals and tasks for today."} Open the Goals tab to review your tasks.`
          );
        }

        const reflectionDeadline = timeToMinutes(schedule.reflectionTime);
        if (reflectionDeadline === null || currentMinute < reflectionDeadline) return;

        const reminderKey = `growmate-voice-reminder:v2:${classroomId}:${currentDate}:reflection:${schedule.reflectionTime}`;
        if (completedRemindersRef.current.has(reminderKey) || isReminderResolved(reminderKey) || pendingRemindersRef.current.has(reminderKey)) return;
        // Don't interrupt another utterance; the next 30-second check will retry.
        if (pendingRemindersRef.current.size > 0 || speechStatus !== "idle") return;

        try {
          const growthResponse = await axios.get(`${GROWTH_API}/${classroomId}`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { date: currentDate },
          });
          if (!active || getToday(timezone) !== currentDate) return;
          if (growthResponse.data.reflection?.content) {
            // This reminder is resolved because the API confirmed submission, not because speech ran.
            completedRemindersRef.current.add(reminderKey);
            setReminderStatus(reminderKey, "reflection-submitted");
            return;
          }
        } catch {
          // Do not announce a pending reflection if its latest status could not be checked.
          return;
        }

        announceReminder(
          "reflection",
          currentDate,
          schedule.reflectionTime,
          "It is your scheduled reflection time. You have not submitted today's reflection yet. Open the Reflection tab when you are ready."
        );
      } finally {
        checkingRef.current = false;
      }
    };

    checkReminders();
    const intervalId = window.setInterval(checkReminders, 30000);
    return () => {
      active = false;
      window.clearInterval(intervalId);
      [...pendingReminders.keys()].forEach(clearPendingReminder);
    };
  }, [classroomId, dailyTasks, schedule, speak, speechStatus, timezone, token]);

  if (!loadError && !voiceError) return null;
  return <p role="status">{loadError || voiceError}</p>;
}

export default ClassroomScheduleVoiceReminders;
