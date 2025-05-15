import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const ManageLeads = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Dummy data - replace with API call
    setLeads([
      {
        id: 1,
        name: "Acme Corp",
        contact: "John Doe",
        source: "LinkedIn",
        status: "New",
        date: "2024-10-10"
      },
      {
        id: 2,
        name: "Beta Inc",
        contact: "Jane Smith",
        source: "Referral",
        status: "In Progress",
        date: "2024-10-11"
      },
    ]);
  }, []);

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Sidebar />
    <div className="layout">
      
      <div className="page-container">
        <h2>Manage Leads</h2>
        <input
          type="text"
          placeholder="Search by Company"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchBox}
        />
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact Person</th>
              <th>Source</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>No leads found.</td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.name}</td>
                  <td>{lead.contact}</td>
                  <td>{lead.source}</td>
                  <td>{lead.status}</td>
                  <td>{lead.date}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/account/view-lead/${lead.id}`)}
                      style={styles.button}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <style>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 60px;
          height: 100vh;
          background: #1f2937;
          color: #fff;
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          transition: width 0.3s ease;
          z-index: 1000;
        }
        .layout:hover .sidebar {
          width: 220px;
        }
        .sidebar-label {
          display: none;
          transition: display 0.3s ease;
        }
        .layout:hover .sidebar-label {
          display: inline;
        }
        .page-container {
          margin-left: 60px;
          padding: 20px;
          background: white;
          min-height: 100vh;
          transition: margin-left 0.3s ease;
          z-index: 0;
        }
        .layout:hover .page-container {
          margin-left: 220px;
        }
      `}</style>
    </div>
    </>
  );
};

const styles = {
  container: {
    marginLeft: "60px", // reserve space for sidebar
    padding: "20px",
    fontFamily: "Arial",
    transition: "margin-left 0.3s ease",
  },
  searchBox: {
    padding: "8px",
    marginBottom: "10px",
    width: "250px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ManageLeads;
