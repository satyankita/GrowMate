
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ClassroomSettings from "./ClassroomSettings";

import {
  LayoutDashboard,
  Users,
  Target,
  BookOpen,
  TrendingUp,
  ArrowLeft,
  Sprout,
  Settings,
  Bell,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock3,
  ListChecks,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";

import Goals from "./Goals";
import Reflection from "./Reflection";
import GrowthTracker from "./GrowthTracker";
import ClassroomNotifications from "../components/ClassroomNotifications";
import ClassroomScheduleVoiceReminders from "../components/ClassroomScheduleVoiceReminders";
import { getClassroomTheme } from "../utils/classroomTheme";

import "./Classroom.css";

const API_BASE = "http://localhost:5000/api";

const getToday = (timezone = "Asia/Kolkata") =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

const formatTime = (time) => {
  if (!time) return "Not set";
  const [hour, minute] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hour, minute, 0, 0);
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
};

function Classroom() {
  const { classroomId } = useParams();
  const navigate = useNavigate();

  const [classroom, setClassroom] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [loading, setLoading] = useState(true);

  const [overviewSettings, setOverviewSettings] = useState(null);
  const [overviewStats, setOverviewStats] = useState(null);
  const [overviewLoading, setOverviewLoading] = useState(false);
  const [overviewError, setOverviewError] = useState("");

  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [participantHistory, setParticipantHistory] = useState(null);
  const [historyDates, setHistoryDates] = useState([]);
  const [historyDate, setHistoryDate] = useState("");
  const [historyMonth, setHistoryMonth] = useState(() => new Date());
  const [historyLoading, setHistoryLoading] = useState(false);
  const [participantError, setParticipantError] = useState("");
  const [roleSaving, setRoleSaving] = useState("");

  const [currentUserId] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "{}").id || "";
    } catch {
      return "";
    }
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchClassroom = async () => {
      try {
        const response = await axios.get(
          `${API_BASE}/classrooms/${classroomId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setClassroom(response.data);
      } catch (error) {
        console.error("Classroom Error:", error);
        alert(error.response?.data?.message || "Could not load classroom");
        navigate("/classrooms");
      } finally {
        setLoading(false);
      }
    };

    fetchClassroom();
  }, [classroomId, navigate, token]);

  const currentMembership = classroom?.members?.find(
    (member) => member.userId === currentUserId
  );

  const isOwner =
    classroom?.hostId === currentUserId &&
    currentMembership?.role === "HOST";

  const canMonitor = ["HOST", "ADMIN"].includes(
    currentMembership?.role
  );

  // Load real classroom settings and today's progress.
  useEffect(() => {
    if (!classroom || !currentMembership) return;

    let cancelled = false;

    const loadOverview = async () => {
      setOverviewLoading(true);
      setOverviewError("");
      setOverviewStats(null);

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const settingsResponse = await axios.get(
          `${API_BASE}/classrooms/${classroomId}/settings`,
          { headers }
        );

        const settings = settingsResponse.data.classroom;

        if (cancelled) return;

        setOverviewSettings(settings);

        const today = getToday(settings.timezone || "Asia/Kolkata");

        let progressRecords = [];

        if (canMonitor) {
          const members = classroom.members || [];

          const results = await Promise.allSettled(
            members.map((member) =>
              axios.get(
                `${API_BASE}/daily-growth/${classroomId}/participants/${member.userId}/history`,
                {
                  headers,
                  params: { date: today },
                }
              )
            )
          );

          progressRecords = results
            .filter((result) => result.status === "fulfilled")
            .map((result) => result.value.data);
        } else {
          const response = await axios.get(
            `${API_BASE}/daily-growth/${classroomId}`,
            {
              headers,
              params: { date: today },
            }
          );

          progressRecords = [
            {
              goal: response.data.goal,
              reflection: response.data.reflection,
              progress: {
                totalTasks: response.data.goal?.tasks?.length || 0,
                completedTasks:
                  response.data.goal?.tasks?.filter((task) => task.completed)
                    .length || 0,
                reflectionSubmitted: Boolean(
                  response.data.reflection?.content
                ),
              },
            },
          ];
        }

        if (cancelled) return;

        const goalsCreated = progressRecords.filter(
          (record) => Boolean(record.goal)
        ).length;

        const reflectionsSubmitted = progressRecords.filter(
          (record) => Boolean(record.reflection?.content)
        ).length;

        const totalTasks = progressRecords.reduce(
          (sum, record) => sum + (record.progress?.totalTasks || 0),
          0
        );

        const completedTasks = progressRecords.reduce(
          (sum, record) => sum + (record.progress?.completedTasks || 0),
          0
        );

        const taskPercent = totalTasks
          ? Math.round((completedTasks / totalTasks) * 100)
          : 0;

        const reflectionPercent = progressRecords.length
          ? Math.round(
              (reflectionsSubmitted / progressRecords.length) * 100
            )
          : 0;

        setOverviewStats({
          today,
          peopleCount: progressRecords.length,
          goalsCreated,
          reflectionsSubmitted,
          totalTasks,
          completedTasks,
          taskPercent,
          reflectionPercent,
          recordsLoaded: progressRecords.length,
        });
      } catch (error) {
        console.error("Overview Error:", error);
        if (!cancelled) {
          setOverviewError(
            error.response?.data?.message ||
              "Today's overview data could not be loaded."
          );
        }
      } finally {
        if (!cancelled) setOverviewLoading(false);
      }
    };

    loadOverview();

    return () => {
      cancelled = true;
    };
  }, [classroom, classroomId, currentMembership, canMonitor, token]);

  const tabs = [
    { name: "Overview", icon: LayoutDashboard },
    { name: "Participants", icon: Users },
    { name: "Goals", icon: Target },
    { name: "Reflection", icon: BookOpen },
    { name: "Growth Tracker", icon: TrendingUp },
    { name: "Settings", icon: Settings },
    { name: "Notifications", icon: Bell },
  ];

  const openParticipant = async (member) => {
    setSelectedParticipant(member);
    setParticipantError("");
    setParticipantHistory(null);
    setHistoryLoading(true);

    const today = getToday(classroom.timezone || "Asia/Kolkata");
    setHistoryDate(today);

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    try {
      const [datesResponse, historyResponse] = await Promise.all([
        axios.get(
          `${API_BASE}/daily-growth/${classroomId}/participants/${member.userId}/dates`,
          { headers }
        ),
        axios.get(
          `${API_BASE}/daily-growth/${classroomId}/participants/${member.userId}/history`,
          { headers, params: { date: today } }
        ),
      ]);

      setHistoryDates(datesResponse.data);
      setParticipantHistory(historyResponse.data);
    } catch (error) {
      setParticipantError(
        error.response?.data?.message ||
          "Could not load this participant's progress."
      );
    } finally {
      setHistoryLoading(false);
    }
  };

  const loadHistoryDate = async (date) => {
    if (!selectedParticipant) return;

    setHistoryDate(date);
    setHistoryLoading(true);
    setParticipantError("");

    try {
      const response = await axios.get(
        `${API_BASE}/daily-growth/${classroomId}/participants/${selectedParticipant.userId}/history`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: { date },
        }
      );

      setParticipantHistory(response.data);
    } catch (error) {
      setParticipantError(
        error.response?.data?.message ||
          "Could not load this day's progress."
      );
    } finally {
      setHistoryLoading(false);
    }
  };

  const changeMemberRole = async (member, role) => {
    const memberName = member.user?.name || "this participant";
    const confirmation = role === "ADMIN"
      ? `Do you want to make ${memberName} an admin? Click OK to confirm.`
      : `Remove admin privileges from ${memberName} and return them to student?`;
    if (!window.confirm(confirmation)) return;

    setRoleSaving(member.id);
    setParticipantError("");

    try {
      const response = await axios.patch(
        `${API_BASE}/classrooms/${classroomId}/members/${member.id}/role`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setClassroom((current) => ({
        ...current,
        members: current.members.map((item) =>
          item.id === member.id
            ? { ...item, role: response.data.member.role }
            : item
        ),
      }));
    } catch (error) {
      setParticipantError(
        error.response?.data?.message ||
          "Could not update participant role."
      );
    } finally {
      setRoleSaving("");
    }
  };

  const removeParticipant = async (member) => {
    const memberName = member.user?.name || "this participant";
    const confirmed = window.confirm(
      `Do you really want to remove ${memberName} from this classroom? They will lose access to classroom activities and participant progress.`
    );
    if (!confirmed) return;

    setRoleSaving(member.id);
    setParticipantError("");
    try {
      await axios.delete(
        `${API_BASE}/classrooms/${classroomId}/members/${member.id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setClassroom((current) => ({
        ...current,
        members: current.members.filter((item) => item.id !== member.id),
        _count: { ...current._count, members: Math.max(0, (current._count?.members || current.members.length) - 1) },
      }));
      if (selectedParticipant?.id === member.id) {
        setSelectedParticipant(null);
        setParticipantHistory(null);
        setHistoryDates([]);
        setHistoryDate("");
      }
    } catch (error) {
      setParticipantError(error.response?.data?.message || "Could not remove the participant.");
    } finally {
      setRoleSaving("");
    }
  };

  const monthStart = new Date(
    historyMonth.getFullYear(),
    historyMonth.getMonth(),
    1
  );
  const monthOffset = (monthStart.getDay() + 6) % 7;
  const monthDays = new Date(
    historyMonth.getFullYear(),
    historyMonth.getMonth() + 1,
    0
  ).getDate();
  const monthKey = `${historyMonth.getFullYear()}-${String(
    historyMonth.getMonth() + 1
  ).padStart(2, "0")}`;

  if (loading) return <p>Loading classroom...</p>;
  if (!classroom) return <p>Classroom not found.</p>;

  const theme = getClassroomTheme(classroom.id);
  const settings = overviewSettings || classroom;
  const dayParts = settings.dayParts || [];
  const stats = overviewStats;

  const todayLabel = stats?.today
    ? new Date(`${stats.today}T12:00:00`).toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : new Date().toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });

  const progressCards = canMonitor
    ? [
        {
          label: "Classroom members",
          value: classroom._count?.members ?? classroom.members?.length ?? 0,
          detail: "People in this classroom",
          icon: Users,
        },
        {
          label: "Goals created",
          value: stats?.goalsCreated ?? "—",
          detail: stats
            ? `Out of ${stats.peopleCount} members`
            : "Today's personal goals",
          icon: Target,
        },
        {
          label: "Tasks completed",
          value: stats ? `${stats.completedTasks}/${stats.totalTasks}` : "—",
          detail: stats ? `${stats.taskPercent}% completion` : "Today's tasks",
          icon: CheckCircle2,
        },
        {
          label: "Reflections submitted",
          value: stats?.reflectionsSubmitted ?? "—",
          detail: stats
            ? `Out of ${stats.peopleCount} members`
            : "Today's reflections",
          icon: BookOpen,
        },
      ]
    : [
        {
          label: "My daily goal",
          value: stats ? (stats.goalsCreated ? "Created" : "Not set") : "—",
          detail: "Your personal goal for today",
          icon: Target,
        },
        {
          label: "Tasks completed",
          value: stats ? `${stats.completedTasks}/${stats.totalTasks}` : "—",
          detail: stats ? `${stats.taskPercent}% completion` : "Today's tasks",
          icon: CheckCircle2,
        },
        {
          label: "My reflection",
          value: stats
            ? stats.reflectionsSubmitted
              ? "Submitted"
              : "Pending"
            : "—",
          detail: "Your daily reflection",
          icon: BookOpen,
        },
      ];

  return (
    <div
      className="classroom-dashboard"
      style={{
        "--classroom-primary": theme.primary,
        "--classroom-soft": theme.soft,
        "--classroom-accent": theme.accent,
        "--cover-start": theme.start,
        "--cover-end": theme.end,
      }}
    >
      <ClassroomScheduleVoiceReminders classroomId={classroomId} />

      <header className="classroom-topbar">
        <button onClick={() => navigate("/classrooms")}>
          <ArrowLeft size={18} /> My Classrooms
        </button>

        <div className="classroom-brand">
          <Sprout size={22} />
          <span>GrowMate</span>
        </div>

      </header>

      <section
        className="classroom-hero"
        style={{
          "--cover-start": theme.start,
          "--cover-end": theme.end,
        }}
      >
        <p>YOUR CLASSROOM</p>
        <h1>{classroom.name}</h1>
        <p>{classroom.description || "Welcome to your growth space."}</p>
        <span>
          <Users size={16} />{" "}
          {classroom._count?.members ?? classroom.members?.length ?? 0} Members
        </span>
      </section>

      <nav className="classroom-tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.name}
              className={activeTab === tab.name ? "active" : ""}
              onClick={() => setActiveTab(tab.name)}
            >
              <Icon size={18} />
              {tab.name}
            </button>
          );
        })}
      </nav>

      <main className="classroom-content">
        {activeTab === "Overview" && (
          <section className="classroom-overview">
            <div className="overview-welcome">
              <div>
                <span className="overview-eyebrow">YOUR DAILY GROWTH SPACE</span>
                <h2>Welcome back!</h2>
                <p>{todayLabel}</p>
              </div>

              <div className="overview-welcome-icon">
                <Sprout size={30} />
              </div>
            </div>

            <section className="overview-goal-card">
              <div className="overview-section-heading">
                <div className="overview-heading-icon">
                  <Target size={20} />
                </div>
                <div>
                  <span>SHARED CLASSROOM GOAL</span>
                  <h3>Today's common goal</h3>
                </div>
              </div>

              <p className="overview-shared-goal">
                {settings.dailyGoal ||
                  "Your classroom's shared daily goal has not been added yet."}
              </p>

              {dayParts.length > 0 && (
                <div className="overview-day-parts">
                  {dayParts
                    .slice()
                    .sort((a, b) => a.order - b.order)
                    .map((part, index) => (
                      <div className="overview-day-part" key={`${part.name}-${index}`}>
                        <span className="overview-part-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <strong>{part.name}</strong>
                          <small>
                            {formatTime(part.startTime)} – {formatTime(part.endTime)}
                          </small>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </section>

            <div className="overview-section-title">
              <div>
                <span className="overview-eyebrow">A QUICK LOOK</span>
                <h3>{canMonitor ? "Today's classroom progress" : "Your progress today"}</h3>
              </div>
              {overviewLoading && (
                <span className="overview-loading-label">
                  <LoaderCircle size={15} className="overview-spinner" />
                  Updating
                </span>
              )}
            </div>

            {overviewError && (
              <p className="overview-error" role="alert">
                {overviewError}
              </p>
            )}

            <div className="overview-stats-grid">
              {progressCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article className="overview-stat-card" key={card.label}>
                    <div className="overview-stat-icon">
                      <Icon size={21} />
                    </div>
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                    <small>{card.detail}</small>
                  </article>
                );
              })}
            </div>

            {stats && (
              <section className="overview-progress-card">
                <div className="overview-section-title">
                  <div>
                    <span className="overview-eyebrow">DAILY ACTIVITY</span>
                    <h3>{canMonitor ? "Classroom activity" : "Your daily activity"}</h3>
                  </div>
                  <TrendingUp size={22} />
                </div>

                <div className="overview-progress-item">
                  <div className="overview-progress-label">
                    <span>Task completion</span>
                    <strong>{stats.taskPercent}%</strong>
                  </div>
                  <div
                    className="overview-progress-track"
                    role="progressbar"
                    aria-valuenow={stats.taskPercent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span style={{ width: `${stats.taskPercent}%` }} />
                  </div>
                  <small>
                    {stats.completedTasks} of {stats.totalTasks} tasks completed
                  </small>
                </div>

                <div className="overview-progress-item">
                  <div className="overview-progress-label">
                    <span>Reflection submissions</span>
                    <strong>{stats.reflectionPercent}%</strong>
                  </div>
                  <div
                    className="overview-progress-track reflection-track"
                    role="progressbar"
                    aria-valuenow={stats.reflectionPercent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span style={{ width: `${stats.reflectionPercent}%` }} />
                  </div>
                  <small>
                    {stats.reflectionsSubmitted} of {stats.peopleCount} reflections submitted
                  </small>
                </div>
              </section>
            )}

            <section className="overview-bottom-grid">
              <div className="overview-schedule-card">
                <div className="overview-section-heading">
                  <div className="overview-heading-icon">
                    <CalendarDays size={19} />
                  </div>
                  <div>
                    <span>DAILY ROUTINE</span>
                    <h3>Today's schedule</h3>
                  </div>
                </div>

                <div className="overview-schedule-row">
                  <div className="overview-schedule-icon">
                    <Target size={18} />
                  </div>
                  <div>
                    <strong>Goal setting</strong>
                    <small>Set your personal daily goal</small>
                  </div>
                  <time>{formatTime(settings.goalSettingTime)}</time>
                </div>

                <div className="overview-schedule-row">
                  <div className="overview-schedule-icon">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <strong>Daily reflection</strong>
                    <small>Review tasks and reflect on your day</small>
                  </div>
                  <time>{formatTime(settings.reflectionTime)}</time>
                </div>

                <div className="overview-timezone">
                  <Clock3 size={14} />
                  Timezone: {settings.timezone || "Asia/Kolkata"}
                </div>
              </div>

              <div className="overview-actions-card">
                <span className="overview-eyebrow">KEEP GROWING</span>
                <h3>What would you like to do?</h3>
                <button type="button" onClick={() => setActiveTab("Goals")}>
                  <Target size={18} />
                  <span>
                    <strong>My daily goals</strong>
                    <small>Set and manage your tasks</small>
                  </span>
                  <ArrowRight size={17} />
                </button>
                <button type="button" onClick={() => setActiveTab("Reflection")}>
                  <BookOpen size={18} />
                  <span>
                    <strong>Daily reflection</strong>
                    <small>Review your day and learn</small>
                  </span>
                  <ArrowRight size={17} />
                </button>
                {canMonitor && (
                  <button type="button" onClick={() => setActiveTab("Participants")}>
                    <Users size={18} />
                    <span>
                      <strong>View participants</strong>
                      <small>Explore classroom progress</small>
                    </span>
                    <ArrowRight size={17} />
                  </button>
                )}
                {canMonitor && (
                  <button type="button" onClick={() => setActiveTab("Settings")}>
                    <Settings size={18} />
                    <span>
                      <strong>Classroom settings</strong>
                      <small>Manage goals and schedule</small>
                    </span>
                    <ArrowRight size={17} />
                  </button>
                )}
              </div>
            </section>
          </section>
        )}

        {activeTab === "Participants" && (
          <section>
            <h2>All Participants</h2>

            <div className="participant-list">
              {classroom.members.map((member) => (
                <article
                  key={member.id}
                  className={`participant-card ${
                    selectedParticipant?.id === member.id ? "is-selected" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="participant-profile-button"
                    onClick={() => openParticipant(member)}
                    disabled={!canMonitor && member.userId !== currentUserId}
                  >
                    <div>
                      <h3>{member.user.name}</h3>
                      <p>{member.user.email}</p>
                    </div>
                    <span
                      className={`member-role role-${member.role.toLowerCase()}`}
                    >
                      {member.role === "HOST"
                        ? "OWNER"
                        : member.role === "PARTICIPANT"
                          ? "STUDENT"
                          : member.role}
                    </span>
                  </button>

                  <div className="participant-actions">
                    {isOwner && member.role !== "HOST" && (
                      <button
                        type="button"
                        className="member-role-action"
                        disabled={roleSaving === member.id}
                        onClick={() => changeMemberRole(member, member.role === "ADMIN" ? "PARTICIPANT" : "ADMIN")}
                      >
                        {roleSaving === member.id
                          ? "Saving…"
                          : member.role === "ADMIN"
                            ? "Remove admin"
                            : "Make admin"}
                      </button>
                    )}
                    {canMonitor && member.role !== "HOST" && member.userId !== currentUserId && (isOwner || member.role === "PARTICIPANT") && (
                      <button
                        type="button"
                        className="member-remove-action"
                        disabled={roleSaving === member.id}
                        onClick={() => removeParticipant(member)}
                      >
                        {roleSaving === member.id ? "Working…" : "Remove participant"}
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {participantError && (
              <p className="participant-error" role="alert">
                {participantError}
              </p>
            )}

            {selectedParticipant && (
              <section
                className="participant-profile"
                aria-label={`${selectedParticipant.user.name} progress profile`}
              >
                <header className="participant-profile-heading">
                  <div>
                    <span>PARTICIPANT PROFILE</span>
                    <h3>{selectedParticipant.user.name}</h3>
                    <p>
                      {selectedParticipant.user.email} ·{" "}
                      {selectedParticipant.role === "HOST"
                        ? "Owner"
                        : selectedParticipant.role === "PARTICIPANT"
                          ? "Student"
                          : selectedParticipant.role}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedParticipant(null);
                      setParticipantHistory(null);
                    }}
                  >
                    Close profile
                  </button>
                </header>

                <div className="history-calendar">
                  <div className="history-calendar-heading">
                    <button
                      type="button"
                      aria-label="Previous month"
                      onClick={() =>
                        setHistoryMonth(
                          new Date(
                            historyMonth.getFullYear(),
                            historyMonth.getMonth() - 1,
                            1
                          )
                        )
                      }
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <h4>
                      <CalendarDays size={17} />
                      {historyMonth.toLocaleDateString(undefined, {
                        month: "long",
                        year: "numeric",
                      })}
                    </h4>
                    <button
                      type="button"
                      aria-label="Next month"
                      onClick={() =>
                        setHistoryMonth(
                          new Date(
                            historyMonth.getFullYear(),
                            historyMonth.getMonth() + 1,
                            1
                          )
                        )
                      }
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <div className="history-calendar-grid" role="grid">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day) => (
                        <span className="history-weekday" key={day}>
                          {day}
                        </span>
                      )
                    )}

                    {Array.from({ length: monthOffset }, (_, index) => (
                      <span
                        className="history-calendar-blank"
                        key={`blank-${index}`}
                      />
                    ))}

                    {Array.from({ length: monthDays }, (_, index) => {
                      const date = `${monthKey}-${String(index + 1).padStart(
                        2,
                        "0"
                      )}`;
                      const hasHistory = historyDates.includes(date);

                      return (
                        <button
                          type="button"
                          role="gridcell"
                          key={date}
                          className={`${hasHistory ? "has-history" : ""} ${
                            historyDate === date ? "is-active" : ""
                          }`}
                          disabled={!hasHistory}
                          onClick={() => loadHistoryDate(date)}
                          aria-label={`${date}${
                            hasHistory
                              ? ", progress available"
                              : ", no saved progress"
                          }`}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                  </div>

                  <small>
                    Dates with saved goals or reflections are highlighted.
                  </small>
                </div>

                {historyLoading ? (
                  <p>Loading saved progress…</p>
                ) : (
                  participantHistory && (
                    <div className="participant-history-data">
                      <h4>
                        {new Date(
                          `${participantHistory.date}T12:00:00`
                        ).toLocaleDateString(undefined, {
                          dateStyle: "full",
                        })}
                      </h4>

                      {!participantHistory.goal &&
                      !participantHistory.reflection ? (
                        <p>No goal or reflection was saved for this date.</p>
                      ) : (
                        <>
                          <div className="history-progress-stats">
                            <strong>
                              Task completion:{" "}
                              {participantHistory.progress.taskPercent === null
                                ? "No task data"
                                : `${participantHistory.progress.taskPercent}%`}
                            </strong>
                            <span>
                              Reflection:{" "}
                              {participantHistory.progress.reflectionSubmitted
                                ? "Submitted"
                                : "Pending"}
                            </span>
                            <span>
                              Overall daily progress:{" "}
                              {participantHistory.progress.overallPercent ===
                              null
                                ? "No task data"
                                : `${participantHistory.progress.overallPercent}% (task completion)`}
                            </span>
                          </div>

                          <h5>Personal goal</h5>
                          <p>
                            {participantHistory.goal?.statement ||
                              "No personal goal saved."}
                          </p>

                          <h5>Tasks</h5>
                          {participantHistory.goal?.tasks.length ? (
                            <ul>
                              {participantHistory.goal.tasks.map((task) => (
                                <li
                                  key={task.id}
                                  className={task.completed ? "task-done" : ""}
                                >
                                  {task.completed ? "✓" : "○"} {task.title}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>No tasks were saved.</p>
                          )}

                          <h5>Reflection</h5>
                          <p>
                            {participantHistory.reflection?.content ||
                              "No reflection was submitted."}
                          </p>
                        </>
                      )}
                    </div>
                  )
                )}
              </section>
            )}
          </section>
        )}

        {activeTab === "Goals" && <Goals />}
        {activeTab === "Reflection" && <Reflection />}
        {activeTab === "Growth Tracker" && <GrowthTracker />}
        {activeTab === "Settings" && <ClassroomSettings />}
        {activeTab === "Notifications" && (
          <ClassroomNotifications classroomId={classroomId} />
        )}
      </main>
    </div>
  );
}

export default Classroom;
