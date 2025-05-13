// EmployeeDashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
// import "../styles/EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const stats = [
    { title: "Total Employees", value: 128 },
    { title: "Active Projects", value: 24 },
    { title: "Pending Leave Requests", value: 7 },
    { title: "WFH Requests Today", value: 5 },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Remote Work Policy",
      date: "2025-05-01",
      description: "Starting next month, employees can apply for up to 3 remote days per week."
    },
    {
      id: 2,
      title: "Office Closed on 15th May",
      date: "2025-05-05",
      description: "Due to maintenance work, the office will remain closed on 15th May."
    }
  ];

  const recentActivities = [
    "Aarav Kumar submitted a timesheet",
    "Meera Iyer applied for leave",
    "Karan Patel uploaded a project document",
    "HR team updated the holiday list",
  ];

  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-content">
          <h1 className="dashboard-title">Employee Dashboard</h1>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <h3>{stat.title}</h3>
                <p>{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="dashboard-sections">
            <div className="dashboard-box announcements-box">
              <h2>Latest Announcements</h2>
              {announcements.map((ann) => (
                <div key={ann.id} className="announcement-card">
                  <h4>{ann.title}</h4>
                  <p className="ann-date">{ann.date}</p>
                  <p>{ann.description}</p>
                </div>
              ))}
            </div>

            <div className="dashboard-box activity-box">
              <h2>Recent Activities</h2>
              <ul>
                {recentActivities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
