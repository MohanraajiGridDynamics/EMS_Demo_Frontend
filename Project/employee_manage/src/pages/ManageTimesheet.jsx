import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
// import "../styles/ManageTimesheet.css";

const ManageTimesheet = () => {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    date: "",
    task: "",
    hours: "",
    status: "Pending"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.date || !form.task || !form.hours) return;
    setEntries([...entries, form]);
    setForm({ date: "", task: "", hours: "", status: "Pending" });
  };

  const updateStatus = (index, newStatus) => {
    const updated = [...entries];
    updated[index].status = newStatus;
    setEntries(updated);
  };

  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content-area">
          <h1 className="page-title">Manage Timesheet</h1>

          <div className="section">
            <h2>Log Work</h2>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
            <input
              type="text"
              name="task"
              placeholder="Task Description"
              value={form.task}
              onChange={handleChange}
            />
            <input
              type="number"
              name="hours"
              placeholder="Hours Worked"
              value={form.hours}
              onChange={handleChange}
              min="0"
              max="24"
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>

          <div className="section">
            <h2>Timesheet Entries</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Task</th>
                  <th>Hours</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.date}</td>
                    <td>{entry.task}</td>
                    <td>{entry.hours}</td>
                    <td>{entry.status}</td>
                    <td>
                      <button
                        className="approve"
                        onClick={() => updateStatus(index, "Approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="reject"
                        onClick={() => updateStatus(index, "Rejected")}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
                {entries.length === 0 && (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center", color: "#6b7280" }}>
                      No timesheet entries yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTimesheet;