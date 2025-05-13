// pages/ManageGrades.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ManageGrades() {
  const [searchId, setSearchId] = useState("");
  const [currentGrade, setCurrentGrade] = useState("");
  const [newGrade, setNewGrade] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [filteredEmployee, setFilteredEmployee] = useState(null);

  const employees = [
    { id: "EMP101", name: "Alice Johnson", role: "Admin", grade: "A" },
    { id: "EMP102", name: "Bob Williams", role: "Employee", grade: "B" },
    { id: "EMP103", name: "Charlie Brown", role: "Admin", grade: "A" },
    { id: "EMP104", name: "Diana Ross", role: "Admin", grade: "C" },
    { id: "EMP105", name: "Ethan Hunt", role: "Employee", grade: "B" },
    { id: "EMP106", name: "Fiona Scott", role: "Admin", grade: "A" },
  ];

  const [employeeList, setEmployeeList] = useState(employees);

  const handleSearch = () => {
    const emp = employeeList.find((e) => e.id === searchId);
    if (emp) {
      setFilteredEmployee(emp);
      setEmployeeName(emp.name);
      setCurrentGrade(emp.role);
    } else {
      setFilteredEmployee(null);
      setEmployeeName("");
      setCurrentGrade("");
      alert("Employee not found! Please create a new user.");
    }
  };

  const handleUpdateGrade = () => {
    if (filteredEmployee) {
      const updatedList = employeeList.map((emp) =>
        emp.id === filteredEmployee.id ? { ...emp, role: newGrade } : emp
      );
      setEmployeeList(updatedList);
      setFilteredEmployee(null);
      setSearchId("");
      setCurrentGrade("");
      setNewGrade("");
      setEmployeeName("");
      alert("Role updated successfully!");
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Topbar />
        <div style={styles.content}>
          <h1>Manage Roles</h1>

          {/* Search Section */}
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

          {/* Grade Editing Section */}
          {searchId && (
            <div style={styles.gradeSection}>
              <input
                type="text"
                placeholder="Employee Name"
                value={employeeName}
                readOnly
                style={{ ...styles.input, backgroundColor: "#e0e0e0" }}
              />
              <input
                type="text"
                placeholder="Current Role"
                value={currentGrade}
                readOnly
                style={{ ...styles.input, backgroundColor: "#e0e0e0" }}
              />
              <input
                type="text"
                placeholder="New Role"
                value={newGrade}
                onChange={(e) => setNewGrade(e.target.value)}
                style={styles.input}
              />
              <button onClick={handleUpdateGrade} style={styles.button}>
                Change Role
              </button>
            </div>
          )}

          {/* Employee Table */}
          <table style={styles.table}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Employee Name</th>
                <th>Role</th>
                <th>Grade</th>
                <th>Emp ID</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{index + 1}</td>
                  <td>{emp.name}</td>
                  <td>{emp.role}</td>
                  <td>{emp.grade}</td>
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
  gradeSection: {
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
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default ManageGrades;
