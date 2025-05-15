import React, { useState } from "react";
import Topbar from "./components/Topbar";

const mockInternalCandidates = [
  {
    id: "EMP001",
    name: "Ravi Kumar",
    department: "Engineering",
    currentRole: "Software Engineer",
    appliedRole: "Senior Software Engineer",
    experience: "3.5 years",
    status: "Pending",
    notes: "",
  },
  {
    id: "EMP002",
    name: "Sonal Mehta",
    department: "Product",
    currentRole: "Product Analyst",
    appliedRole: "Product Manager",
    experience: "4 years",
    status: "Cleared",
    notes: "Strong leadership skills.",
  },
  {
    id: "EMP003",
    name: "Aditya Joshi",
    department: "QA",
    currentRole: "QA Tester",
    appliedRole: "Automation Engineer",
    experience: "2 years",
    status: "On Hold",
    notes: "",
  },
];

const TIScreen = () => {
  const [candidates, setCandidates] = useState(mockInternalCandidates);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...candidates];
    updated[index].status = newStatus;
    setCandidates(updated);
  };

  const handleNotesChange = (index, newNote) => {
    const updated = [...candidates];
    updated[index].notes = newNote;
    setCandidates(updated);
  };

  return (
    <>
    <Topbar />
    <div style={{ padding: "80px 20px 20px 20px" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
        TI Screen - Internal Candidates
      </h2>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "0 auto" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0", textAlign: "left" }}>
              <th style={thStyle}>Emp ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Current Role</th>
              <th style={thStyle}>Applied Role</th>
              <th style={thStyle}>Experience</th>
              <th style={thStyle}>Interview Status</th>
              <th style={thStyle}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((cand, index) => (
              <tr key={cand.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tdStyle}>{cand.id}</td>
                <td style={tdStyle}>{cand.name}</td>
                <td style={tdStyle}>{cand.department}</td>
                <td style={tdStyle}>{cand.currentRole}</td>
                <td style={tdStyle}>{cand.appliedRole}</td>
                <td style={tdStyle}>{cand.experience}</td>
                <td style={tdStyle}>
                  <select
                    value={cand.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    style={selectStyle}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Cleared">Cleared</option>
                    <option value="Rejected">Rejected</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </td>
                <td style={tdStyle}>
                  <textarea
                    value={cand.notes}
                    onChange={(e) => handleNotesChange(index, e.target.value)}
                    placeholder="Add notes..."
                    style={textareaStyle}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

// Styling
const thStyle = {
  padding: "12px 10px",
  fontWeight: "bold",
  borderBottom: "2px solid #ccc",
};

const tdStyle = {
  padding: "10px",
  verticalAlign: "top",
};

const selectStyle = {
  padding: "5px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const textareaStyle = {
  width: "100%",
  height: "60px",
  padding: "6px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  resize: "vertical",
};

export default TIScreen;
