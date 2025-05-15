import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChartBlock from "./components/ChartBlock"; // reuse from components
import StatusBadge from "./components/StatusBadge";

const ViewLead = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy lead data (replace with context/api later)
  const lead = {
    id,
    name: "John Doe",
    company: "TechNova Inc.",
    email: "john.doe@technova.com",
    phone: "+91 98765 43210",
    status: "Active",
    source: "LinkedIn",
    assignedTo: "Samantha Roy",
    notes: "Very interested in our cloud solution.",
    lastContacted: "2025-04-29",
    engagementLevel: 75, // %
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Lead Details</h2>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>← Back</button>

      <div style={styles.detailsGrid}>
        <div>
          <p><strong>Name:</strong> {lead.name}</p>
          <p><strong>Company:</strong> {lead.company}</p>
          <p><strong>Email:</strong> {lead.email}</p>
          <p><strong>Phone:</strong> {lead.phone}</p>
        </div>
        <div>
          <p><strong>Status:</strong> <StatusBadge status={lead.status} /></p>
          <p><strong>Source:</strong> {lead.source}</p>
          <p><strong>Assigned To:</strong> {lead.assignedTo}</p>
          <p><strong>Last Contacted:</strong> {lead.lastContacted}</p>
        </div>
      </div>

      <div style={styles.notesBox}>
        <h4>Notes</h4>
        <p>{lead.notes}</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>Engagement Level</h3>
        <ChartBlock percentage={lead.engagementLevel} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "10px",
  },
  backBtn: {
    marginBottom: "20px",
    padding: "6px 12px",
    background: "#eee",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
  detailsGrid: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  notesBox: {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
};

export default ViewLead;
