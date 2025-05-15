import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const ViewProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Replace this with an actual API call in real setup
    const dummyProjects = [
      {
        id: 1,
        title: "Website Redesign",
        client: "Acme Corp",
        status: "In Progress",
        deadline: "2024-11-30",
        description: "Complete overhaul of the Acme Corp website to modern UI standards.",
      },
      {
        id: 2,
        title: "App Launch",
        client: "Beta Inc",
        status: "Completed",
        deadline: "2024-09-15",
        description: "Launch of the new Beta mobile application for Android and iOS.",
      },
    ];

    const selected = dummyProjects.find((proj) => proj.id === parseInt(id));
    setProject(selected);
  }, [id]);

  if (!project) {
    return (
      <>
        <Sidebar />
        <div style={styles.container}>
          <h2>Project Not Found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <div style={styles.container}>
        <h2>View Project Details</h2>
        <div style={styles.card}>
          <p><strong>Title:</strong> {project.title}</p>
          <p><strong>Client:</strong> {project.client}</p>
          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Deadline:</strong> {project.deadline}</p>
          <p><strong>Description:</strong> {project.description}</p>
          <button onClick={() => navigate("/account/manage-projects")} style={styles.backButton}>
            ← Back to Projects
          </button>
        </div>
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
  card: {
    backgroundColor: "#f3f4f6",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  backButton: {
    marginTop: "20px",
    padding: "8px 16px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ViewProject;
