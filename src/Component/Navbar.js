import { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="navbar">
        {/* LEFT SIDE (Title + Back) */}
        <div className="navbar-left">
          <h1 className="title">My Portfolio</h1>
          {location.pathname !== "/" && (
            <button
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              ⬅ Back
            </button>
          )}
        </div>

        {/* RIGHT SIDE (Hamburger Menu) */}
        <span className="menu-btn" onClick={() => setOpen(true)}>☰</span>
      </div>

      {/* Drawer Menu */}
      <div className={`drawer ${open ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setOpen(false)}>×</span>
        <Link to="/mywork" onClick={() => setOpen(false)}>My Work</Link>
        <Link to="/myskill" onClick={() => setOpen(false)}>My Skills</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/certificate" onClick={() => setOpen(false)}>Certificates</Link>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </div>
  );
}
