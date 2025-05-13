// EmployeeLocationManagement.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const EmployeeLocationManagement = () => {
  const [locationData, setLocationData] = useState([
    { id: 1, name: "John Doe", department: "HR", location: "Chennai Office", status: "On-site" },
    { id: 2, name: "Jane Smith", department: "Tech", location: "Remote", status: "Remote" },
  ]);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const handleUpdate = (id) => {
    const updated = locationData.map((emp) => {
      if (emp.id === id) {
        return {
          ...emp,
          location: selectedLocation || emp.location,
          status: selectedStatus || emp.status,
        };
      }
      return emp;
    });
    setLocationData(updated);
    setSelectedLocation("");
    setSelectedStatus("");
    setSelectedEmployeeId(null);
  };

  return (
    <div style={styles.wrapper}>
      <Sidebar />
      <div style={styles.container}>
        <Topbar />
        <div style={styles.contentWrapper}>
          <h1 style={styles.title}>Employee Location Management</h1>

          <div style={styles.summaryBoxWrapper}>
            <div style={styles.summaryBox}>🏢 Chennai Office – 1</div>
            <div style={styles.summaryBox}>🏠 Remote – 1</div>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {locationData.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.location}</td>
                  <td>{emp.status}</td>
                  <td>
                    <select
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      defaultValue=""
                      style={styles.input}
                    >
                      <option value="">Change Location</option>
                      <option value="Chennai Office">Chennai Office</option>
                      <option value="Bangalore Office">Bangalore Office</option>
                      <option value="Remote">Remote</option>
                    </select>
                    <select
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      defaultValue=""
                      style={styles.input}
                    >
                      <option value="">Change Status</option>
                      <option value="On-site">On-site</option>
                      <option value="Remote">Remote</option>
                      <option value="On Leave">On Leave</option>
                    </select>
                    <button
                      onClick={() => handleUpdate(emp.id)}
                      style={styles.button}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  contentWrapper: {
    padding: "20px",
    flexGrow: 1,
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  summaryBoxWrapper: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  summaryBox: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  input: {
    padding: "6px 10px",
    marginRight: "6px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default EmployeeLocationManagement;
