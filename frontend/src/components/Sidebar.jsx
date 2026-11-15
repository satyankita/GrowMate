
import {
  LayoutDashboard,
  Target,
  BookOpen,
  TrendingUp,
  Users,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">
        Grow<span>Mate</span>
      </h2>

      <p className="menu-title">MENU</p>

      <nav>
        <a className="nav-link active" href="#">
          <LayoutDashboard size={20} />
          Dashboard
        </a>

        <a className="nav-link" href="#">
          <Target size={20} />
          My Goals
        </a>

        <a className="nav-link" href="#">
          <BookOpen size={20} />
          Reflection
        </a>

        <a className="nav-link" href="#">
          <TrendingUp size={20} />
          Growth Tracker
        </a>

        <a className="nav-link" href="#">
          <Users size={20} />
          Classroom
        </a>

        <a className="nav-link" href="#">
          <Settings size={20} />
          Settings
        </a>
      </nav>

      <div className="sidebar-bottom">
        <p>Small steps every day lead to big growth 🌱</p>
      </div>
    </aside>
  );
}

export default Sidebar;
