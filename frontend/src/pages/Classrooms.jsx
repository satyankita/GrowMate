
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import {
  Sprout,
  Plus,
  Users,
  LogOut,
  BookOpen,
  ArrowRight,
  X,
  Copy,
  Sparkles,
  GraduationCap,
} from "lucide-react";

import "../styles/Classrooms.css";
import ClassroomNotifications from "../components/ClassroomNotifications";
import { getClassroomTheme } from "../utils/classroomTheme";
import Navbar from "../components/Navbar";

const API_URL = "https://growmate-backend-jpp4.onrender.com/api/classrooms";

function Classrooms() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = localStorage.getItem("token");

  // Classroom states
  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [modal, setModal] = useState(null);
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  // Form states
  const [classroomName, setClassroomName] = useState("");
  const [description, setDescription] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");

  // General states
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Join request states
  const [joinRequests, setJoinRequests] = useState([]);
  const [requestsLoading, setRequestsLoading] = useState(false);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // Fetch classrooms
  const fetchClassrooms = async () => {
    try {
      const response = await axios.get(API_URL, { headers });
      setClassrooms(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Could not load classrooms."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetchClassrooms();
  }, []);

  // Open modal
  const openModal = (type, classroom = null) => {
    setError("");
    setMessage("");
    setSelectedClassroom(classroom);
    setModal(type);
  };

  // Close modal
  const closeModal = () => {
    setModal(null);
    setSelectedClassroom(null);
    setError("");
    setMessage("");
    setJoinRequests([]);
    setInviteEmail("");
  };

  // Create classroom
  const handleCreate = async (e) => {
    e.preventDefault();

    setBusy(true);
    setError("");

    try {
      await axios.post(
        API_URL,
        {
          name: classroomName,
          description,
        },
        { headers }
      );

      setClassroomName("");
      setDescription("");

      closeModal();
      await fetchClassrooms();

      setMessage("Your classroom has been created!");
    } catch (err) {
      setError(
        err.response?.data?.message || "Could not create classroom."
      );
    } finally {
      setBusy(false);
    }
  };

  // Send classroom join request
  const handleJoin = async (e) => {
    e.preventDefault();

    setBusy(true);
    setError("");

    try {
      const response = await axios.post(
        `${API_URL}/join`,
        { joinCode },
        { headers }
      );

      setJoinCode("");
      closeModal();

      await fetchClassrooms();

      setMessage(
        response.data.message ||
          "Join request sent! Waiting for HOST or ADMIN approval."
      );
    } catch (err) {
      setError(
        err.response?.data?.message || "Could not join classroom."
      );
    } finally {
      setBusy(false);
    }
  };

  // Fetch pending join requests
  const fetchJoinRequests = async (classroomId) => {
    setRequestsLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `${API_URL}/${classroomId}/requests`,
        { headers }
      );

      setJoinRequests(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Could not fetch join requests."
      );
    } finally {
      setRequestsLoading(false);
    }
  };

  // Accept join request
  const handleAcceptRequest = async (requestId, classroomId) => {
    try {
      await axios.post(
        `${API_URL}/${classroomId}/requests/${requestId}/accept`,
        {},
        { headers }
      );

      setMessage("Student accepted successfully!");

      await fetchJoinRequests(classroomId);
      await fetchClassrooms();
    } catch (err) {
      setError(
        err.response?.data?.message || "Could not accept request."
      );
    }
  };

  // Reject join request
  const handleRejectRequest = async (requestId, classroomId) => {
    try {
      await axios.post(
        `${API_URL}/${classroomId}/requests/${requestId}/reject`,
        {},
        { headers }
      );

      setMessage("Join request rejected.");

      await fetchJoinRequests(classroomId);
    } catch (err) {
      setError(
        err.response?.data?.message || "Could not reject request."
      );
    }
  };

  // Temporary invitation handler
  // Actual email API will be connected separately.
const handleInviteSubmit = async (e) => {
  e.preventDefault();

  if (!inviteEmail.trim()) return;

  try {
    setBusy(true);

    const response = await axios.post(
      `${API_URL}/${selectedClassroom.id}/invite`,
      { email: inviteEmail.trim() },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(response.data.message);
    setInviteEmail("");
    setModal(null);
  } catch (error) {
    console.error("Invite Error:", error);
    alert(
      error.response?.data?.message ||
      "Could not send invitation email"
    );
  } finally {
    setBusy(false);
  }
};

  // Copy classroom code
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(
        selectedClassroom.joinCode
      );

      setMessage("Invite code copied!");
      setError("");
    } catch {
      setError("Could not copy code. Please copy it manually.");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  // Total members
  const totalMembers = classrooms.reduce(
    (total, classroom) =>
      total + (classroom._count?.members || 0),
    0
  );

  return (
    <div className="gm-page">

      {/* Header */}
      <Navbar />

      <main className="gm-main">

        {/* Hero Section */}
        <section className="gm-hero">
          <div className="gm-hero-content">
            <span className="gm-eyebrow">
              <Sparkles size={14} /> YOUR LEARNING SPACE
            </span>

            <h1>
              Grow together.
              <br />
              <span>Achieve more.</span>
            </h1>

            <p>
              Your classrooms, goals and personal growth journey
              come together in one place.
            </p>
          </div>

          <div className="gm-hero-art">
            <div className="gm-orbit orbit-one" />
            <div className="gm-orbit orbit-two" />

            <div className="gm-hero-symbol">
              <GraduationCap size={76} strokeWidth={1.3} />
            </div>

            <Sparkles
              className="gm-sparkle sparkle-one"
              size={25}
            />

            <Sparkles
              className="gm-sparkle sparkle-two"
              size={17}
            />
          </div>
        </section>

        <details className="gm-notification-drawer">
          <summary>Classroom notifications and invitations</summary>
          <ClassroomNotifications />
        </details>

        {/* Stats */}
        <section className="gm-stats">
          <div className="gm-stat-card">
            <div className="gm-stat-icon purple">
              <BookOpen size={21} />
            </div>

            <div>
              <strong>{classrooms.length}</strong>
              <span>My Classrooms</span>
            </div>
          </div>

          <div className="gm-stat-card">
            <div className="gm-stat-icon teal">
              <Users size={21} />
            </div>

            <div>
              <strong>{totalMembers}</strong>
              <span>Total Members</span>
            </div>
          </div>

          <div className="gm-stat-card">
            <div className="gm-stat-icon orange">
              <Sparkles size={21} />
            </div>

            <div>
              <strong>Grow</strong>
              <span>Every Single Day</span>
            </div>
          </div>
        </section>

        {/* Create and Join Actions */}
        <section className="gm-actions-section">
          <div className="gm-section-heading">
            <div>
              <span className="gm-small-label">GET STARTED</span>
              <h2>What would you like to do?</h2>
            </div>
          </div>

          <div className="gm-action-grid">
            <button
              className="gm-action-card create-action"
              onClick={() => openModal("create")}
            >
              <div className="gm-action-icon">
                <Plus size={25} />
              </div>

              <div>
                <h3>Create a Classroom</h3>
                <p>
                  Start your own learning community and invite members.
                </p>
              </div>

              <ArrowRight
                className="gm-action-arrow"
                size={21}
              />
            </button>

            <button
              className="gm-action-card join-action"
              onClick={() => openModal("join")}
            >
              <div className="gm-action-icon">
                <Users size={25} />
              </div>

              <div>
                <h3>Join a Classroom</h3>
                <p>
                  Already have a code? Enter it and join your community.
                </p>
              </div>

              <ArrowRight
                className="gm-action-arrow"
                size={21}
              />
            </button>
          </div>
        </section>

        {/* My Classrooms */}
        <section className="gm-classrooms-section">
          <div className="gm-section-heading">
            <div>
              <span className="gm-small-label">
                YOUR COMMUNITIES
              </span>

              <h2>My Classrooms</h2>

              <p>All the learning spaces you are part of.</p>
            </div>

            <span className="gm-count">
              {classrooms.length} CLASSROOMS
            </span>
          </div>

          {message && (
            <div className="gm-success">{message}</div>
          )}

          {error && !modal && (
            <div className="gm-error">{error}</div>
          )}

          {loading ? (
            <div className="gm-empty">
              <div className="gm-loader" />
              <p>Loading your classrooms...</p>
            </div>
          ) : classrooms.length === 0 ? (
            <div className="gm-empty">
              <div className="gm-empty-icon">
                <BookOpen size={34} />
              </div>

              <h3>Your learning journey starts here</h3>

              <p>
                Create a new classroom or join one using an invite code.
              </p>
            </div>
          ) : (
            <div className="gm-classroom-grid">
              {classrooms.map((classroom) => {
                const theme = getClassroomTheme(classroom.id);

                const role =
                  classroom.members?.[0]?.role || "PARTICIPANT";

                const canInvite = ["HOST", "ADMIN"].includes(role);

                return (
                  <article
                    className="gm-classroom-card"
                    key={classroom.id}
                    role="link"
                    tabIndex={0}
                    aria-label={`Open ${classroom.name} classroom`}
                    onClick={() => navigate(`/classrooms/${classroom.id}`)}
                    onKeyDown={(event) => {
                      if (event.target !== event.currentTarget) return;
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        navigate(`/classrooms/${classroom.id}`);
                      }
                    }}
                    style={{
                      cursor: "pointer",
                      "--classroom-primary": theme.primary,
                      "--classroom-soft": theme.soft,
                      "--classroom-accent": theme.accent,
                    }}>

                    <div
                      className="gm-classroom-cover"
                      style={{
                        "--cover-start": theme.start,
                        "--cover-end": theme.end,
                      }}
                    >
                      <div className="gm-cover-decoration" />

                      <div className="gm-cover-icon">
                        <BookOpen size={34} />
                      </div>

                      <span className="gm-role">{role}</span>
                    </div>

                    <div className="gm-classroom-info">
                      <h3>{classroom.name}</h3>

                      <p>
                        {classroom.description ||
                          "A space to learn and grow together."}
                      </p>

                      <div className="gm-classroom-meta">
                        <span>
                          <Users size={15} />
                          {classroom._count?.members || 0} members
                        </span>
                      </div>

                      {canInvite && (
                        <>
                          <button
                            className="gm-card-button"
                            onClick={(e) => {
                            e.stopPropagation();
                            openModal("invite", classroom);
                            }}>

                            <Users size={16} />
                            Invite Members
                            <ArrowRight size={16} />
                          </button>

                          <button
                            className="gm-card-button"
                            onClick={(e) => {
                            e.stopPropagation();
                            openModal("requests", classroom);
                            fetchJoinRequests(classroom.id);
                            }}>


                            <Users size={16} />
                            Pending Requests
                            <ArrowRight size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Modals */}
      {modal && (
        <div
          className="gm-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="gm-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gm-modal-close"
              onClick={closeModal}
              type="button"
            >
              <X size={20} />
            </button>

            {/* Create Classroom Modal */}
            {modal === "create" && (
              <>
                <div className="gm-modal-icon">
                  <Plus size={25} />
                </div>

                <h2>Create your classroom</h2>

                <p>
                  Build a space where everyone can learn and grow.
                </p>

                <form onSubmit={handleCreate}>
                  <label>Classroom name</label>

                  <input
                    value={classroomName}
                    onChange={(e) =>
                      setClassroomName(e.target.value)
                    }
                    placeholder="e.g. Full Stack Development"
                    required
                  />

                  <label>Description</label>

                  <textarea
                    value={description}
                    onChange={(e) =>
                      setDescription(e.target.value)
                    }
                    placeholder="What will this classroom be about?"
                  />

                  {error && (
                    <div className="gm-error">{error}</div>
                  )}

                  <button
                    className="gm-primary-button"
                    disabled={busy}
                  >
                    {busy ? "Creating..." : "Create Classroom"}
                  </button>
                </form>
              </>
            )}

            {/* Join Classroom Modal */}
            {modal === "join" && (
              <>
                <div className="gm-modal-icon">
                  <Users size={25} />
                </div>

                <h2>Join a classroom</h2>

                <p>
                  Enter the invite code shared by your classroom owner
                  or admin.
                </p>

                <form onSubmit={handleJoin}>
                  <label>Classroom invite code</label>

                  <input
                    value={joinCode}
                    onChange={(e) =>
                      setJoinCode(e.target.value.toUpperCase())
                    }
                    placeholder="Enter your code"
                    required
                  />

                  {error && (
                    <div className="gm-error">{error}</div>
                  )}

                  <button
                    className="gm-primary-button"
                    disabled={busy}
                  >
                    {busy ? "Sending Request..." : "Join Classroom"}
                  </button>
                </form>
              </>
            )}

            {/* Invite Members Modal */}
            {modal === "invite" && selectedClassroom && (
              <>
                <div className="gm-modal-icon">
                  <Users size={25} />
                </div>

                <h2>Invite members</h2>

                <p>
                  Invite students to
                  <strong> {selectedClassroom.name}</strong>
                  {" "}through email or share the classroom code.
                </p>

                <form onSubmit={handleInviteSubmit}>
                  <label>Email address</label>

                  <input
                    type="email"
                    value={inviteEmail}
                    onChange={(e) =>
                      setInviteEmail(e.target.value)
                    }
                    placeholder="Enter student's email"
                    required
                  />

                  <button
                    type="submit"
                    className="gm-card-button"
                    disabled={busy}
                  >
                    <Users size={16} />
                    {busy ? "Sending..." : "Send Invitation"}
                  </button>
                </form>

                <label>Classroom invite code</label>

                <div className="gm-copy-code">
                  <strong>{selectedClassroom.joinCode}</strong>

                  <button
                    onClick={handleCopyCode}
                    type="button"
                  >
                    <Copy size={17} />
                    Copy
                  </button>
                </div>

                {message && (
                  <div className="gm-success">{message}</div>
                )}

                {error && (
                  <div className="gm-error">{error}</div>
                )}

                <p className="gm-invite-note">
                  Anyone with this code can request to join as a participant.
                </p>
              </>
            )}

            {/* Pending Requests Modal */}
            {modal === "requests" && selectedClassroom && (
              <>
                <div className="gm-modal-icon">
                  <Users size={25} />
                </div>

                <h2>Pending Requests</h2>

                <p>
                  Students requesting to join
                  <strong> {selectedClassroom.name}</strong>
                </p>

                {requestsLoading ? (
                  <p>Loading requests...</p>
                ) : joinRequests.length === 0 ? (
                  <p>No pending requests right now.</p>
                ) : (
                  <div className="gm-request-list">
                    {joinRequests.map((request) => (
                      <div
                        className="gm-request-item"
                        key={request.id}
                      >
                        <div>
                          <strong>{request.user.name}</strong>
                          <p>{request.user.email}</p>
                        </div>

                        <div className="gm-request-actions">
                          <button
                            type="button"
                            onClick={() =>
                              handleAcceptRequest(
                                request.id,
                                selectedClassroom.id
                              )
                            }
                          >
                            Accept
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleRejectRequest(
                                request.id,
                                selectedClassroom.id
                              )
                            }
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {message && (
                  <div className="gm-success">{message}</div>
                )}

                {error && (
                  <div className="gm-error">{error}</div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Classrooms;
