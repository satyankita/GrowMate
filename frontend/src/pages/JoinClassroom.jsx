
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Users, GraduationCap, CheckCircle, AlertCircle, LoaderCircle } from "lucide-react";
import axios from "axios";
import "./JoinClassroom.css";
const API_URL = "http://localhost:5000/api/classrooms";

function JoinClassroom() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("Please wait while we process your invitation.");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const joinClassroom = async () => {
      const code =
        searchParams.get("code") ||
        localStorage.getItem("pendingJoinCode");

      if (!code) {
        setStatus("error");
        setMessage("This invitation link is invalid or incomplete.");
        return;
      }

      const token = localStorage.getItem("token");

      if (!token) {
        localStorage.setItem("pendingJoinCode", code);
        navigate("/login");
        return;
      }

      try {
        const response = await axios.post(
          `${API_URL}/join`,
          { joinCode: code },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        localStorage.removeItem("pendingJoinCode");
        setStatus("success");
        setMessage(
          response.data.message ||
            "Your request has been sent to the classroom host."
        );
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.setItem("pendingJoinCode", code);
          navigate("/login");
          return;
        }

        setStatus("error");
        setMessage(
          error.response?.data?.message ||
            "We couldn't process your invitation. Please try again."
        );
      }
    };

    joinClassroom();
  }, [navigate, searchParams]);

  return (
    <main className="join-page">
      <div className="join-background-shape shape-one" />
      <div className="join-background-shape shape-two" />

      <section className="join-card">
        <div className="join-brand">
          <div className="join-brand-icon">
            <GraduationCap size={25} />
          </div>
          <span>GrowMate</span>
        </div>

        <div className={`join-status-icon ${status}`}>
          {status === "loading" && <LoaderCircle size={34} />}
          {status === "success" && <CheckCircle size={38} />}
          {status === "error" && <AlertCircle size={38} />}
        </div>

        <p className="join-eyebrow">CLASSROOM INVITATION</p>

        <h1>
          {status === "loading" && "Joining your classroom"}
          {status === "success" && "You're almost there!"}
          {status === "error" && "Invitation unavailable"}
        </h1>

        <p className="join-description">{message}</p>

        {status === "success" && (
          <div className="join-info">
            <Users size={20} />
            <span>
              Your request is pending approval from the classroom host or admin.
            </span>
          </div>
        )}

        <button
          className="join-action-btn"
          onClick={() => navigate("/classrooms")}
          disabled={status === "loading"}
        >
          {status === "success" ? "Go to Classrooms" : "Back to Classrooms"}
        </button>

        <p className="join-footer">
          Learn together. Grow together.
        </p>
      </section>
    </main>
  );
}

export default JoinClassroom;
