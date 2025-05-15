import React, { useState } from "react";
import Topbar from "./components/Topbar";

const NTIScreen = () => {
  const [candidates, setCandidates] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.resume) {
      alert("Name, Email, and Resume are required.");
      return;
    }

    setCandidates([...candidates, { ...form }]);
    setForm({
      name: "",
      email: "",
      phone: "",
      role: "",
      experience: "",
      resume: null,
    });
  };

  return (
    <>
    <Topbar />
    <div style={{ padding: "80px 20px 40px" }}>
      <h2 style={{ textAlign: "center", fontSize: "26px", marginBottom: "20px" }}>
        NTI Screen - External Candidates
      </h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Name*</label>
        <input style={inputStyle} name="name" value={form.name} onChange={handleChange} required />

        <label style={labelStyle}>Email*</label>
        <input type="email" style={inputStyle} name="email" value={form.email} onChange={handleChange} required />

        <label style={labelStyle}>Phone</label>
        <input style={inputStyle} name="phone" value={form.phone} onChange={handleChange} />

        <label style={labelStyle}>Role Applied</label>
        <input style={inputStyle} name="role" value={form.role} onChange={handleChange} />

        <label style={labelStyle}>Experience</label>
        <input style={inputStyle} name="experience" value={form.experience} onChange={handleChange} />

        <label style={labelStyle}>Upload Resume*</label>
        <input type="file" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" style={inputStyle} />

        {form.resume && (
          <p style={{ marginTop: "5px", color: "green" }}>📄 {form.resume.name}</p>
        )}

        <button type="submit" style={submitStyle}>Add Candidate</button>
      </form>

      {/* Candidate Table */}
      {candidates.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ marginBottom: "10px" }}>🧾 Candidate List</h3>
          <table style={tableStyle}>
            <thead>
              <tr style={theadStyle}>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Experience</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((cand, idx) => (
                <tr key={idx} style={tbodyRow}>
                  <td>{cand.name}</td>
                  <td>{cand.email}</td>
                  <td>{cand.phone}</td>
                  <td>{cand.role}</td>
                  <td>{cand.experience}</td>
                  <td>{cand.resume?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  );
};

// Styles
const formStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  background: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const labelStyle = {
  fontWeight: "bold",
  marginTop: "8px",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const submitStyle = {
  marginTop: "15px",
  padding: "10px",
  fontWeight: "bold",
  background: "#0044cc",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const theadStyle = {
  backgroundColor: "#eee",
  textAlign: "left",
};

const tbodyRow = {
  borderBottom: "1px solid #ddd",
};

export default NTIScreen;
