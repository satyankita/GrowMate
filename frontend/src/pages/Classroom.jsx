
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
} from "lucide-react";

import Goals from "./Goals";
import Reflection from "./Reflection";
import GrowthTracker from "./GrowthTracker";

import "./Classroom.css";

function Classroom() {
  const { classroomId } = useParams();
  const navigate = useNavigate();

  const [classroom, setClassroom] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClassroom = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:5000/api/classrooms/${classroomId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
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
  }, [classroomId, navigate]);

  const tabs = [
    { name: "Overview", icon: LayoutDashboard },
    { name: "Participants", icon: Users },
    { name: "Goals", icon: Target },
    { name: "Reflection", icon: BookOpen },
    { name: "Growth Tracker", icon: TrendingUp },
    { name: "Settings", icon: Settings },
  ];

  if (loading) return <p>Loading classroom...</p>;
  if (!classroom) return <p>Classroom not found.</p>;

  return (
    <div className="classroom-dashboard">
      <header className="classroom-topbar">
        <button onClick={() => navigate("/classrooms")}>
          <ArrowLeft size={18} /> My Classrooms
        </button>

        <div className="classroom-brand">
          <Sprout size={22} />
          <span>GrowMate</span>
        </div>
      </header>

      <section className="classroom-hero">
        <p>YOUR CLASSROOM</p>
        <h1>{classroom.name}</h1>
        <p>{classroom.description || "Welcome to your growth space."}</p>
        <span>
          <Users size={16} /> {classroom._count.members} Members
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
          <section>
            <h2>Classroom Overview</h2>
            <p>Welcome to {classroom.name}!</p>
            <p>Build goals, reflect daily and track your growth.</p>
          </section>
        )}

        {activeTab === "Participants" && (
          <section>
            <h2>All Participants</h2>

            <div className="participant-list">
              {classroom.members.map((member) => (
                <article key={member.id} className="participant-card">
                  <div>
                    <h3>{member.user.name}</h3>
                    <p>{member.user.email}</p>
                  </div>
                  <span>{member.role}</span>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === "Goals" && <Goals />}
        {activeTab === "Reflection" && <Reflection />}
        {activeTab === "Growth Tracker" && <GrowthTracker />}
        {activeTab === "Settings" && <ClassroomSettings />}
      </main>
    </div>
  );
}

export default Classroom;
