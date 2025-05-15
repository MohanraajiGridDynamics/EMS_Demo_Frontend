import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProjectForm from "./components/ProjectForm";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Simulate fetching project data by ID
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
    setProjectData(selected);
  }, [id]);

  const handleUpdate = (updatedProject) => {
    // Call your update API here (e.g., axios.put(`/api/projects/${id}`, updatedProject))
    console.log("Updated Project:", updatedProject);
    navigate("/account/manage-projects");
  };

  if (!projectData) {
    return (
      <>
        <Sidebar />
        <div style={{ marginLeft: "60px", padding: "20px" }}>
          <h2>Project not found.</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "60px", padding: "20px" }}>
        <h2>Edit Project</h2>
        <ProjectForm initialData={projectData} onSubmit={handleUpdate} />
      </div>
    </>
  );
};

export default EditProject;
