import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/ManageAnnouncement.css";

const ManageAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [form, setForm] = useState({ title: "", message: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.message.trim()) return;

    if (editingIndex !== null) {
      const updated = [...announcements];
      updated[editingIndex] = form;
      setAnnouncements(updated);
      setEditingIndex(null);
    } else {
      setAnnouncements([...announcements, form]);
    }

    setForm({ title: "", message: "" });
  };

  const handleEdit = (index) => {
    setForm(announcements[index]);
    setEditingIndex(index);
  };

  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content-area">
          <h1 className="page-title">Manage Announcements</h1>

          <div className="section">
            <h2>{editingIndex !== null ? "Edit Announcement" : "Create Announcement"}</h2>
            <input
              type="text"
              name="title"
              placeholder="Announcement Title"
              value={form.title}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Announcement Message"
              value={form.message}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>
              {editingIndex !== null ? "Update" : "Post"}
            </button>
          </div>

          <div className="section">
            <h2>All Announcements</h2>
            <div className="announcement-list">
              {announcements.map((a, index) => (
                <div className="announcement-card" key={index}>
                  <h3>{a.title}</h3>
                  <p>{a.message}</p>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </div>
              ))}
              {announcements.length === 0 && (
                <p style={{ marginTop: "10px", color: "#6b7280" }}>
                  No announcements posted yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAnnouncement;
