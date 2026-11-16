import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import "../styles/Auth.css";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    const confirmPassword = String(form.get("confirmPassword") || "");
    if (password !== confirmPassword) return setError("Passwords do not match.");
    setSubmitting(true);
    try {
      const response = await axios.post("https://growmate-backend-jpp4.onrender.com/api/auth/register", { name, email, password, confirmPassword });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      const pendingJoinCode = localStorage.getItem("pendingJoinCode");
      navigate(pendingJoinCode ? `/join?code=${encodeURIComponent(pendingJoinCode)}` : "/classrooms");
    } catch (signupError) {
      setError(signupError.response?.data?.message || "Could not create your account. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-right">
        <div className="auth-form-container">
          <h2>Create Account</h2>
          <p className="auth-subtitle">Start your personal growth journey with GrowMate.</p>
          {error && <p className="auth-error" role="alert">{error}</p>}
          <form onSubmit={handleSignup}>
            <div className="auth-input-group">
              <label htmlFor="signup-name">Full Name</label>
              <div className="auth-input-wrapper"><input id="signup-name" name="name" autoComplete="name" maxLength={100} required /></div>
            </div>
            <div className="auth-input-group">
              <label htmlFor="signup-email">Email Address</label>
              <div className="auth-input-wrapper"><input id="signup-email" name="email" type="email" autoComplete="email" required /></div>
            </div>
            <div className="auth-input-group">
              <label htmlFor="signup-password">Password</label>
              <div className="auth-input-wrapper"><input id="signup-password" name="password" type="password" autoComplete="new-password" minLength={8} required /></div>
              <small>Use at least 8 characters, including a letter and a number.</small>
            </div>
            <div className="auth-input-group">
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <div className="auth-input-wrapper"><input id="signup-confirm-password" name="confirmPassword" type="password" autoComplete="new-password" minLength={8} required /></div>
            </div>
            <button type="submit" className="auth-submit-btn" disabled={submitting}>
              {submitting ? "Creating account..." : "Create Account"}<ArrowRight size={18} />
            </button>
          </form>
          <p className="auth-switch">Already have an account?<Link to="/login"> Login</Link></p>
          <Link to="/" className="back-home">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
