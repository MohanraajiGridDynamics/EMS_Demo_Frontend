import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";

const ManageProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Replace with actual API call
    setProjects([
      {
        id: 1,
        title: "Website Redesign",
        client: "Acme Corp",
        status: "In Progress",
        deadline: "2024-11-30"
      },
      {
        id: 2,
        title: "App Launch",
        client: "Beta Inc",
        status: "Completed",
        deadline: "2024-09-15"
      },
    ]);
  }, []);

  const filteredProjects = projects.filter((proj) =>
    proj.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (confirmDelete) {
      setProjects(projects.filter((proj) => proj.id !== id));
    }
  };

  return (
    <>
      <Sidebar />
      <div style={styles.container}>
        <h2>Manage Projects</h2>

        <div style={styles.topBar}>
          <input
            type="text"
            placeholder="Search by Project Title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchBox}
          />
          <button
            onClick={() => navigate("/account/add-project")}
            style={styles.addButton}
          >
            + Add Project
          </button>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Client</th>
              <th>Status</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No projects found.
                </td>
              </tr>
            ) : (
              filteredProjects.map((proj) => (
                <tr key={proj.id}>
                  <td>{proj.title}</td>
                  <td>{proj.client}</td>
                  <td>{proj.status}</td>
                  <td>{proj.deadline}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/account/view-project/${proj.id}`)}
                      style={styles.viewBtn}
                    >
                      View
                    </button>
                    <button
                      onClick={() => navigate(`/account/edit-project/${proj.id}`)}
                      style={styles.editBtn}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(proj.id)}
                      style={styles.deleteBtn}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

const styles = {
  container: {
    marginLeft: "60px",
    padding: "20px",
    fontFamily: "Arial",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  searchBox: {
    padding: "8px",
    width: "250px",
  },
  addButton: {
    padding: "8px 16px",
    backgroundColor: "#10b981",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  viewBtn: {
    marginRight: "8px",
    padding: "6px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  editBtn: {
    marginRight: "8px",
    padding: "6px",
    backgroundColor: "#f59e0b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "6px",
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ManageProjects;
