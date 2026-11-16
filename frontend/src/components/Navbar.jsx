
import React from "react";
import { useNavigate } from "react-router-dom";
import { Sprout, LogOut } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="gm-header">
      <div className="gm-brand">
        <div className="gm-brand-icon">
          <Sprout size={23} />
        </div>
        <span>GrowMate</span>
      </div>

      <div className="gm-header-right">
        <div className="gm-user">
          <div className="gm-avatar">
            {(user.name || "G").charAt(0).toUpperCase()}
          </div>
          <span>{user.name || "GrowMate User"}</span>
        </div>

        <button className="gm-logout" onClick={handleLogout}>
          <LogOut size={17} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
