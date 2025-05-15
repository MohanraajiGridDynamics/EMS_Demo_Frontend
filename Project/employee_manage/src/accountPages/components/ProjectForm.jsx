import React, { useState } from "react";

const ProjectForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    client: initialData.client || "",
    status: initialData.status || "In Progress",
    deadline: initialData.deadline || "",
    description: initialData.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.client) {
      alert("Please fill out all required fields.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.group}>
        <label>Project Title*</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label>Client Name*</label>
        <input
          type="text"
          name="client"
          value={formData.client}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="On Hold">On Hold</option>
        </select>
      </div>

      <div style={styles.group}>
        <label>Deadline</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          style={styles.textarea}
        />
      </div>

      <button type="submit" style={styles.button}>
        {initialData.title ? "Update Project" : "Add Project"}
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "500px",
  },
  group: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  button: {
    padding: "10px",
    backgroundColor: "#10b981",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ProjectForm;
