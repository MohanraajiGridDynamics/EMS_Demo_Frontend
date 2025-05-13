// pages/ManageDepartment.jsx
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/Topbar";

function ManageDepartment() {
  const predefinedDepartments = [
    "Human Resources",
    "Information Technology",
    "Finance",
    "Marketing",
    "Sales",
    "Customer Support",
    "Research and Development",
    "Operations",
    "Legal",
    "Administration",
  ];

  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingData, setEditingData] = useState({
    name: "",
    employees: "",
    manager: "",
    teams: "",
    activeTeams: "",
  });

  const handleAddFromDropdown = () => {
    if (selectedDepartment && !departments.some(dep => dep.name === selectedDepartment)) {
      setDepartments([
        ...departments,
        { name: selectedDepartment, employees: "", manager: "", teams: "", activeTeams: "" }
      ]);
      setSelectedDepartment("");
    }
  };

  const handleAddNewDepartment = () => {
    const trimmed = newDepartment.trim();
    if (trimmed !== "" && !departments.some(dep => dep.name === trimmed)) {
      setDepartments([
        ...departments,
        { name: trimmed, employees: "", manager: "", teams: "", activeTeams: "" }
      ]);
      setNewDepartment("");
    }
  };

  const handleDelete = (index) => {
    const updatedDepartments = [...departments];
    updatedDepartments.splice(index, 1);
    setDepartments(updatedDepartments);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingData({ ...departments[index] });
  };

  const handleSaveEdit = (index) => {
    const updatedDepartments = [...departments];
    updatedDepartments[index] = { ...editingData };
    setDepartments(updatedDepartments);
    setEditingIndex(null);
    setEditingData({
      name: "",
      employees: "",
      manager: "",
      teams: "",
      activeTeams: "",
    });
  };

  const filteredDepartments = departments.filter(dep =>
    dep.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Topbar />
        <div style={styles.content}>
          <h1>Department Management</h1>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ ...styles.input, marginBottom: "20px", width: "300px" }}
          />

          {/* Dropdown + Button */}
          <div style={styles.addSection}>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              style={styles.dropdown}
            >
              <option value="">Select Department</option>
              {predefinedDepartments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <button onClick={handleAddFromDropdown} style={styles.button}>
              Add
            </button>
          </div>

          {/* Add New Department */}
          <div style={styles.addSection}>
            <input
              type="text"
              placeholder="Enter new department"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleAddNewDepartment} style={styles.button}>
              Add New
            </button>
          </div>

          {/* Table */}
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Department Name</th>
                <th>Employees</th>
                <th>Manager</th>
                <th>Teams</th>
                <th>Active Teams</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDepartments.map((dept, index) => (
                <tr key={index}>
                  <td>
                    {editingIndex === index ? (
                      <input
                        value={editingData.name}
                        onChange={(e) =>
                          setEditingData({ ...editingData, name: e.target.value })
                        }
                        style={styles.input}
                      />
                    ) : (
                      dept.name
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        value={editingData.employees}
                        onChange={(e) =>
                          setEditingData({ ...editingData, employees: e.target.value })
                        }
                        style={styles.input}
                      />
                    ) : (
                      dept.employees || "--"
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        value={editingData.manager}
                        onChange={(e) =>
                          setEditingData({ ...editingData, manager: e.target.value })
                        }
                        style={styles.input}
                      />
                    ) : (
                      dept.manager || "--"
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        value={editingData.teams}
                        onChange={(e) =>
                          setEditingData({ ...editingData, teams: e.target.value })
                        }
                        style={styles.input}
                      />
                    ) : (
                      dept.teams || "--"
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        value={editingData.activeTeams}
                        onChange={(e) =>
                          setEditingData({ ...editingData, activeTeams: e.target.value })
                        }
                        style={styles.input}
                      />
                    ) : (
                      dept.activeTeams || "--"
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <button
                        onClick={() => handleSaveEdit(index)}
                        style={styles.actionButton}
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(index)}
                          style={styles.actionButton}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          style={styles.actionButton}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  main: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
    padding: "20px",
    backgroundColor: "#f5f5f5",
    overflowY: "auto",
  },
  dropdown: {
    padding: "10px",
    width: "300px",
  },
  addSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    width: "200px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  },
  actionButton: {
    margin: "0 5px",
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
  },
};

export default ManageDepartment;
