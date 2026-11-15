
import { Target, CheckCircle, Clock, TrendingUp } from "lucide-react";

function Dashboard() {
  return (
    <div className="dashboard">

      <section className="welcome-section">
        <div>
          <h1>Good Morning! 👋</h1>
          <p>Ready to make today productive?</p>
        </div>
        <span className="date">Your Growth Journey 🌱</span>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <Target />
          <p>Today's Goals</p>
          <h2>6</h2>
        </div>

        <div className="stat-card">
          <CheckCircle />
          <p>Completed Tasks</p>
          <h2>4</h2>
        </div>

        <div className="stat-card">
          <Clock />
          <p>Pending Tasks</p>
          <h2>2</h2>
        </div>

        <div className="stat-card">
          <TrendingUp />
          <p>Weekly Progress</p>
          <h2>75%</h2>
        </div>
      </section>

      <section className="content-grid">
        <div className="dashboard-card">
          <h3>Today's Progress</h3>
          <div className="progress-info">
            <span>Task completion</span>
            <strong>67%</strong>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p className="muted">4 out of 6 tasks completed</p>
        </div>

        <div className="dashboard-card">
          <h3>Daily Schedule</h3>

          <div className="schedule-item">
            <span className="schedule-dot"></span>
            <div>
              <strong>First Part</strong>
              <p>Morning goals and tasks</p>
            </div>
          </div>

          <div className="schedule-item">
            <span className="schedule-dot"></span>
            <div>
              <strong>Second Part</strong>
              <p>Afternoon goals and tasks</p>
            </div>
          </div>

          <div className="schedule-item">
            <span className="schedule-dot"></span>
            <div>
              <strong>Third Part</strong>
              <p>Evening reflection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-card reminder-card">
        <div>
          <h3>Evening Reflection</h3>
          <p>Review your completed tasks and evaluate your learning.</p>
        </div>
        <span>⏰ 7:00 PM</span>
      </section>

    </div>
  );
}

export default Dashboard;
