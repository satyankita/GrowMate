
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-right">
        <div className="auth-form-container">
          <h2>Create Account</h2>
          <p className="auth-subtitle">
            Start your personal growth journey with GrowMate.
          </p>

          <form>
            <div className="auth-input-group">
              <label>Full Name</label>
              <div className="auth-input-wrapper">
                <input type="text" placeholder="Enter your name" required />
              </div>
            </div>

            <div className="auth-input-group">
              <label>Email Address</label>
              <div className="auth-input-wrapper">
                <input type="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div className="auth-input-group">
              <label>Password</label>
              <div className="auth-input-wrapper">
                <input type="password" placeholder="Create password" required />
              </div>
            </div>

            <button type="submit" className="auth-submit-btn">
              Create Account
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
