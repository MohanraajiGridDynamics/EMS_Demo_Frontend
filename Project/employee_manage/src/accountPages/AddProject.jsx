import React from "react";
import ProjectForm from "./components/ProjectForm";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();

  const handleAddProject = (newProject) => {
    // TODO: Add backend/API call here to store project data
    console.log("New project submitted:", newProject);

    // Navigate to ManageProjects after adding
    navigate("/account/manage-projects");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Project</h2>
      <ProjectForm onSubmit={handleAddProject} />
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#333",
  },
};

export default AddProject;
