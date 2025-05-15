// components/Sidebar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const navigate = useNavigate();

  const sidebarItems = [
    { name: "Role Management", path: "/employee-role-management" },
    { name: "Department Management", path: "/employee-department-management" },
    { name: "Title Management", path: "/employee-title-management" },
    { name: "Grade Management", path: "/employee-grade-management" },
    { name: "Create Employee", path: "/employee-create-employee" },
    { name: "Manage Holidays/WFH", path: "/employee-manage-holidays" },
    { name: "Manage Users", path: "/employee-manage-users" },
    { name: "Employee Location", path: "/employee-manage-location" },
    { name: "Manage Documents", path:"/employee-manage-docs"},
    { name: "Manage Announcement", path: "/employee-manage-announcement" },
    { name: "Manage Timesheet", path: "/employee-manage-timesheet" },
    { name: "Employee Dashboard", path: "/employee-dashboard" },
  
  ];

  return (
    <div
      style={{
        ...styles.sidebar,
        width: isSidebarExpanded ? "200px" : "60px",
      }}
      onMouseEnter={() => setIsSidebarExpanded(true)}
      onMouseLeave={() => setIsSidebarExpanded(false)}
    >
      {sidebarItems.map((item) => (
        <div
          key={item.name}
          style={styles.sidebarItem}
          onClick={() => navigate(item.path)}
        >
          {isSidebarExpanded ? item.name : item.name.charAt(0)}
        </div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    backgroundColor: "#2196F3",
    color: "white",
    paddingTop: "20px",
    transition: "width 0.3s",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sidebarItem: {
    margin: "10px 0",
    cursor: "pointer",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    width: "90%",
    transition: "background 0.3s",
  },
};

export default Sidebar;
