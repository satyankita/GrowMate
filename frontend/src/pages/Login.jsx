
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sprout,
} from "lucide-react";
import "../styles/Auth.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [googleError, setGoogleError] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    try {
      const response = await axios.post("https://growmate-backend-jpp4.onrender.com/api/auth/login", {
        email: data.get("email"), password: data.get("password"),
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      const pendingJoinCode = localStorage.getItem("pendingJoinCode");
      navigate(pendingJoinCode ? `/join?code=${encodeURIComponent(pendingJoinCode)}` : "/classrooms");
    } catch (loginError) {
      setError(loginError.response?.data?.message || "Could not log in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

const handleGoogleSuccess = async (credentialResponse) => {
  try {
    setGoogleError("");

    const response = await axios.post(
      "https://growmate-backend-jpp4.onrender.com/api/auth/google",
      {
        credential: credentialResponse.credential,
      }
    );

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    // Check whether the user came through a classroom invitation
    const pendingJoinCode = localStorage.getItem("pendingJoinCode");

    if (pendingJoinCode) {
      navigate(`/join?code=${encodeURIComponent(pendingJoinCode)}`);
    } else {
      navigate("/classrooms");
    }
  } catch (error) {
    console.error("Google login failed:", error);

    setGoogleError(
      error.response?.data?.message ||
        "Google login failed. Please try again."
    );
  }
};

  return (
    <div className="auth-page">
      <div className="auth-left">
        <Link to="/" className="auth-brand">
          <span className="auth-brand-icon">
            <Sprout size={23} />
          </span>
          GrowMate
        </Link>

        <div className="auth-welcome">
          <span className="auth-tag">WELCOME BACK</span>

          <h1>
            Every small step brings you closer to your goals.
          </h1>

          <p>
            Continue your growth journey, track your progress
            and become a better version of yourself.
          </p>

          <div className="auth-decoration">
            <div className="auth-circle circle-one"></div>
            <div className="auth-circle circle-two"></div>

            <div className="auth-quote">
              <Sprout size={30} />
              <h3>Keep Growing!</h3>
              <p>Consistency creates progress.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <span className="auth-small-tag">
            YOUR JOURNEY CONTINUES
          </span>

          <h2>Welcome Back!</h2>

          <p className="auth-subtitle">
            Login to continue your growth journey.
          </p>

          {/* Google Login */}
          <div className="google-login-wrapper">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() =>
                setGoogleError("Google login was unsuccessful.")
              }
              text="continue_with"
              shape="rectangular"
              theme="outline"
              width="320"
            />
          </div>

          {googleError && (
            <p className="auth-error">{googleError}</p>
          )}
          {error && <p className="auth-error" role="alert">{error}</p>}

          <div className="auth-divider">
            <span>OR CONTINUE WITH EMAIL</span>
          </div>

          {/* Email Login */}
          <form onSubmit={handleLogin}>
            <div className="auth-input-group">
              <label>Email Address</label>

              <div className="auth-input-wrapper">
                <Mail size={19} />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="auth-input-group">
              <label>Password</label>

              <div className="auth-input-wrapper">
                <Lock size={19} />

                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={submitting}>
              {submitting ? "Logging in..." : "Login to Account"}
              <ArrowRight size={19} />
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?
            <Link to="/signup"> Create Account</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
