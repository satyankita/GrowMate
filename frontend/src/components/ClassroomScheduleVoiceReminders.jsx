import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useVoiceAssistant from "../hooks/useVoiceAssistant";

const CLASSROOM_API = "http://localhost:5000/api/classrooms";
const GROWTH_API = "http://localhost:5000/api/daily-growth";

function getToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function ClassroomScheduleVoiceReminders({ classroomId }) {
  const token = localStorage.getItem("token");
  const today = getToday();
  const [schedule, setSchedule] = useState(null);
  const [dailyTasks, setDailyTasks] = useState([]);
  const [reflectionSubmitted, setReflectionSubmitted] = useState(false);
  const [loadError, setLoadError] = useState("");
  const checkingRef = useRef(false);
  const { speak, stopSpeech, voiceError } = useVoiceAssistant();

  useEffect(() => () => stopSpeech(), [stopSpeech]);

  useEffect(() => {
    let active = true;
    const headers = { Authorization: `Bearer ${token}` };

    Promise.all([
      axios.get(`${CLASSROOM_API}/${classroomId}/settings`, { headers }),
      axios.get(`${GROWTH_API}/${classroomId}`, { headers, params: { date: today } }),
    ]).then(([settingsResponse, growthResponse]) => {
      if (!active) return;
      setSchedule(settingsResponse.data.classroom);
      setDailyTasks(growthResponse.data.goal?.tasks || []);
      setReflectionSubmitted(Boolean(growthResponse.data.reflection));
    }).catch((error) => {
      if (active) setLoadError(error.response?.data?.message || "Could not load classroom voice reminders.");
    });

    return () => { active = false; };
  }, [classroomId, today, token]);

  useEffect(() => {
    if (!schedule || !token) return undefined;

    const checkReminders = async () => {
      if (checkingRef.current) return;
      checkingRef.current = true;
      try {
        const now = new Date();
        const currentMinute = now.getHours() * 60 + now.getMinutes();
        const announceOnceDue = (kind, time, message) => {
          if (!time || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) return;
          const [hour, minute] = time.split(":").map(Number);
          if (currentMinute < hour * 60 + minute) return;
          const key = `growmate-voice-reminder:${classroomId}:${today}:${kind}:${time}`;
          if (localStorage.getItem(key)) return;
          localStorage.setItem(key, "spoken");
          speak(message);
        };

        announceOnceDue(
          "goal-setting",
          schedule.goalSettingTime,
        `It is your scheduled goal setting time. Today's classroom goal is ${schedule.dailyGoal || "not set yet"}. ${dailyTasks.filter((task) => !task.completed).length ? `Pending tasks: ${dailyTasks.filter((task) => !task.completed).map((task) => task.title).join(", ")}.` : "You have no pending tasks from today's list."} Open the Goals tab to review your tasks.`
        );
        if (!reflectionSubmitted) {
          const time = schedule.reflectionTime;
          const [hour, minute] = (time || "").split(":").map(Number);
          const reminderKey = `growmate-voice-reminder:${classroomId}:${today}:reflection:${time}`;
          if (time && /^([01]\d|2[0-3]):[0-5]\d$/.test(time) && currentMinute >= hour * 60 + minute && !localStorage.getItem(reminderKey)) {
            try {
              const growthResponse = await axios.get(`${GROWTH_API}/${classroomId}`, {
                headers: { Authorization: `Bearer ${token}` },
                params: { date: today },
              });
              if (growthResponse.data.reflection) {
                setReflectionSubmitted(true);
                return;
              }
            } catch {
              // Do not announce that a reflection is pending if its status could not be checked.
              return;
            }
            announceOnceDue(
              "reflection",
              time,
              "It is your scheduled reflection time. You have not submitted today's reflection yet. Open the Reflection tab when you are ready."
            );
          }
        }
      } finally {
        checkingRef.current = false;
      }
    };

    checkReminders();
    const intervalId = window.setInterval(checkReminders, 30000);
    return () => window.clearInterval(intervalId);
  }, [classroomId, dailyTasks, reflectionSubmitted, schedule, speak, today, token]);

  if (!loadError && !voiceError) return null;
  return <p role="status">{loadError || voiceError}</p>;
}

export default ClassroomScheduleVoiceReminders;
