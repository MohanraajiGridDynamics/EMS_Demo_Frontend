import React, { useState } from "react";

const initialPrograms = [
  {
    id: 1,
    name: "React Bootcamp",
    trainer: "John Doe",
    startDate: "2025-06-01",
    endDate: "2025-06-15",
  },
  {
    id: 2,
    name: "Advanced Java",
    trainer: "Jane Smith",
    startDate: "2025-07-01",
    endDate: "2025-07-10",
  },
];

const ManageProgram = () => {
  const [programs, setPrograms] = useState(initialPrograms);
  const [form, setForm] = useState({
    name: "",
    trainer: "",
    startDate: "",
    endDate: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...programs];
      updated[editIndex] = { ...form, id: programs[editIndex].id };
      setPrograms(updated);
      setEditIndex(null);
    } else {
      const newProgram = { ...form, id: Date.now() };
      setPrograms([...programs, newProgram]);
    }

    setForm({ name: "", trainer: "", startDate: "", endDate: "" });
  };

  const handleEdit = (index) => {
    setForm(programs[index]);
    setEditIndex(index);
  };

  const handleDelete = (id) => {
    const updated = programs.filter((prog) => prog.id !== id);
    setPrograms(updated);
  };

  return (
    <div style={{ padding: "80px 20px" }}>
      <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>Manage Training Programs</h2>

      {/* Create or Update Form */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="name"
          placeholder="Program Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="trainer"
          placeholder="Trainer"
          value={form.trainer}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="startDate"
          type="date"
          value={form.startDate}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="endDate"
          type="date"
          value={form.endDate}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          {editIndex !== null ? "Update Program" : "Add Program"}
        </button>
      </form>

      {/* Program List Table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Trainer</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((prog, index) => (
            <tr key={prog.id}>
              <td>{prog.name}</td>
              <td>{prog.trainer}</td>
              <td>{prog.startDate}</td>
              <td>{prog.endDate}</td>
              <td>
                <button onClick={() => handleEdit(index)} style={smallButton}>
                  Edit
                </button>
                <button onClick={() => handleDelete(prog.id)} style={smallButtonDanger}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const formStyle = {
  marginBottom: "30px",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const inputStyle = {
  padding: "10px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  minWidth: "200px",
};

const buttonStyle = {
  padding: "10px 16px",
  backgroundColor: "#4c8bf5",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const smallButton = {
  marginRight: "8px",
  padding: "6px 12px",
  fontSize: "12px",
  backgroundColor: "#0099cc",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const smallButtonDanger = {
  ...smallButton,
  backgroundColor: "#cc3333",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

export default ManageProgram;
