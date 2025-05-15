import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Briefcase, TrendingUp } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { name: "Manage Leads", path: "/account/manage-leads", icon: <TrendingUp size={20} /> },
    { name: "Manage Customers", path: "/account/manage-customers", icon: <Users size={20} /> },
    { name: "Manage Projects", path: "/account/manage-projects", icon: <Briefcase size={20} /> },
    { name: "Performance", path: "/performance-review", icon: <Home size={20} /> },
  ];

  return (
    
    <aside
      className="sidebar"
      style={{
    width: "60px",
    minHeight: "100vh",
    background: "#1f2937",
    color: "#fff",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: "width 0.3s ease",
    overflowX: "hidden",
  }}
    >
                
      <div className="sidebar-header" style={{
        textAlign: "center",
        marginBottom: "30px",
        fontWeight: "bold",
        fontSize: "18px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        transition: "opacity 0.3s ease",
      }}>
        ⚙️ <span className="sidebar-label">EMPLOYEE HUB</span>
      </div>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "10px" }}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              color: isActive ? "#10b981" : "#d1d5db",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontWeight: isActive ? "bold" : "normal",
              padding: "8px 12px",
              borderRadius: "8px",
              backgroundColor: isActive ? "#374151" : "transparent",
              whiteSpace: "nowrap",
              overflow: "hidden",
              transition: "all 0.2s ease",
            })}
          >
            {item.icon}
            <span className="sidebar-label">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Hover style (using plain CSS at bottom) */}
      <style>{`
        .sidebar:hover {
          width: 220px;
          z-index: 1000;
        }

        .sidebar:hover .sidebar-label {
          display: inline;
        }

        .sidebar-label {
          display: none;
          transition: display 0.3s ease;
        }

        .sidebar:hover .sidebar-label {
          display: inline;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
