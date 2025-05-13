// pages/ManageTitles.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ManageTitles() {
  const [searchId, setSearchId] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [filteredEmployee, setFilteredEmployee] = useState(null);

  const employees = [
    { id: "EMP001", name: "John Doe", title: "Software Engineer" },
    { id: "EMP002", name: "Jane Smith", title: "Project Manager" },
    { id: "EMP003", name: "Michael Johnson", title: "UI/UX Designer" },
    { id: "EMP004", name: "Emily Davis", title: "QA Engineer" },
    { id: "EMP005", name: "William Brown", title: "Backend Developer" },
    { id: "EMP006", name: "Olivia Wilson", title: "HR Specialist" },
  ];

  const [employeeList, setEmployeeList] = useState(employees);

  const handleSearch = () => {
    const emp = employeeList.find((e) => e.id === searchId);
    if (emp) {
      setFilteredEmployee(emp);
      setCurrentTitle(emp.title);
    } else {
      setFilteredEmployee(null);
      setCurrentTitle("");
      alert("Employee not found! Please create a new user.");
    }
  };

  const handleUpdateTitle = () => {
    if (filteredEmployee) {
      const updatedList = employeeList.map((emp) =>
        emp.id === filteredEmployee.id ? { ...emp, title: newTitle } : emp
      );
      setEmployeeList(updatedList);
      setFilteredEmployee(null);
      setSearchId("");
      setCurrentTitle("");
      setNewTitle("");
      alert("Title updated successfully!");
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Topbar />
        <div style={styles.content}>
          <h1>Manage Titles</h1>

          {/* Search Bar */}
          <div style={styles.searchSection}>
            <input
              type="text"
              placeholder="Enter Employee ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleSearch} style={styles.button}>
              Search
            </button>
          </div>

          {/* Title Editing Section */}
          {searchId && (
            <div style={styles.titleSection}>
              <input
                type="text"
                placeholder="Current Title"
                value={currentTitle}
                readOnly
                style={{ ...styles.input, backgroundColor: "#e0e0e0" }}
              />
              <input
                type="text"
                placeholder="New Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                style={styles.input}
              />
              <button onClick={handleUpdateTitle} style={styles.button}>
                Update Title
              </button>
            </div>
          )}

          {/* Employee Table */}
          <table style={styles.table}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Employee Name</th>
                <th>Title</th>
                <th>Emp ID</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{index + 1}</td>
                  <td>{emp.name}</td>
                  <td>{emp.title}</td>
                  <td>{emp.id}</td>
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
  },
  searchSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  titleSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default ManageTitles;
