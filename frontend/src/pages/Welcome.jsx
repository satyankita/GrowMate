
import { useState } from "react";
import "../styles/Welcome.css";
import "../styles/Theme.css";
import "../styles/Responsive.css";
import "../styles/Animations.css";
import { Link } from "react-router-dom";
import {
  Target,
  Brain,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";

function Welcome() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("growmate-theme") === "dark"
  );

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("growmate-theme", newMode ? "dark" : "light");
  };

  return (
    <div className={darkMode ? "welcome-page dark-mode" : "welcome-page"}>
      <nav className="welcome-navbar">
        <a href="#" className="brand">
          <span className="brand-icon">G</span>
          GrowMate<span className="brand-dot">.</span>
        </a>

        <div className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button className="login-btn"><Link to="/login" className="login-btn">
  Login
</Link></button>

          <button className="signup-btn">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="hero-tag">
              <Sparkles size={15} />
              Your personal growth companion
            </div>

            <h1>
              Small Steps Today.
              <span> Bigger Growth Tomorrow.</span>
            </h1>

            <p className="hero-description">
              Set meaningful goals, turn them into daily tasks,
              reflect on your progress, and grow with the help
              of AI. Your journey to becoming better starts here.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Start Your Journey <ArrowRight size={18} />
              </button>

              <a href="#features" className="secondary-btn">
                Explore Features
              </a>
            </div>

            <div className="hero-points">
              <span><CheckCircle2 size={16} /> Set daily goals</span>
              <span><CheckCircle2 size={16} /> Track your growth</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="growth-card">
              <div className="growth-card-top">
                <div>
                  <span className="small-label">YOUR JOURNEY</span>
                  <h3>Every day counts 🌱</h3>
                </div>
                <span className="growth-icon">
                  <TrendingUp size={22} />
                </span>
              </div>

              <div className="growth-progress">
                <div className="progress-heading">
                  <span>Daily progress</span>
                  <strong>75%</strong>
                </div>
                <div className="progress-track">
                  <div className="progress-value"></div>
                </div>
              </div>

              <div className="growth-task">
                <span className="task-check"><CheckCircle2 size={18} /></span>
                <div>
                  <strong>Learn something new</strong>
                  <p>Keep moving forward</p>
                </div>
              </div>

              <div className="growth-task">
                <span className="task-check"><CheckCircle2 size={18} /></span>
                <div>
                  <strong>Complete daily goals</strong>
                  <p>Small steps, big results</p>
                </div>
              </div>

              <div className="growth-quote">
                "Progress, not perfection."
              </div>
            </div>

            <div className="floating-note note-one">
              <span>🎯</span>
              <div>
                <strong>Set your goals</strong>
                <small>Plan your day</small>
              </div>
            </div>

            <div className="floating-note note-two">
              <span>✨</span>
              <div>
                <strong>Grow every day</strong>
                <small>Celebrate progress</small>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <span className="section-tag">ABOUT GROWMATE</span>
            <h2>Your growth deserves a plan.</h2>
            <p>
              GrowMate helps you stay consistent, understand your
              learning, and become more confident in your journey.
            </p>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="section-tag">WHAT YOU CAN DO</span>
            <h2>Everything you need to grow</h2>
            <p>
              One platform to plan your goals, reflect on your day,
              and understand your progress.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon purple">
                <Target size={25} />
              </div>
              <h3>Smart Goal Setting</h3>
              <p>
                Write your goals naturally and let AI turn them
                into clear, actionable tasks.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">
                <Brain size={25} />
              </div>
              <h3>AI-Powered Reflection</h3>
              <p>
                Reflect on completed tasks and test your
                understanding with AI-generated questions.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon green">
                <TrendingUp size={25} />
              </div>
              <h3>Growth Tracking</h3>
              <p>
                See your daily progress, achievements,
                and areas where you can improve.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon pink">
                <Users size={25} />
              </div>
              <h3>Collaborative Classrooms</h3>
              <p>
                Create or join multiple classrooms and grow
                together with your learning community.
              </p>
            </div>
          </div>
        </section>

        <section className="bottom-cta">
          <h2>Ready to grow a little every day?</h2>
          <p>Your journey starts with one small step.</p>
          <button className="primary-btn">
            Get Started <ArrowRight size={18} />
          </button>
        </section>
      </main>

      <footer className="welcome-footer">
        <a href="#home" className="brand">
          <span className="brand-icon">G</span>
          GrowMate<span className="brand-dot">.</span>
        </a>
        <p>Grow with purpose. Improve with consistency. 🌱</p>
      </footer>
    </div>
  );
}

export default Welcome;
