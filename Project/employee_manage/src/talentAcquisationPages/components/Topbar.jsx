import React from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css"; // Import the CSS file we will create

const navItems = [
  { name: "Candidate Register", path: "/ta/candidate-register" },
  { name: "Interview Workflow", path: "/ta/interview-workflow" },
  { name: "TI Screen", path: "/ta/TIScreen" },
  { name: "NTI Screen", path: "/ta/NTIScreen" },
  { name: "TA Reports", path: "/ta/tareports" },
];

const Topbar = () => {
  return (
    <header className="topbar">
      <nav className="topbar-nav">
        <div className="topbar-logo">Talent Acquisition</div>
        <ul className="topbar-menu">
          {navItems.map(({ name, path }) => (
            <li key={path} className="topbar-menu-item">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  "topbar-link" + (isActive ? " active" : "")
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
