import { useState } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/Topbar";

function RoleManagement() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [roles, setRoles] = useState([
    { name: "Engineer", description: "Develops applications", totalEmployees: 40, presentToday: 32 },
    { name: "Manager", description: "Manages team", totalEmployees: 10, presentToday: 8 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editRoleData, setEditRoleData] = useState({ name: "", description: "", totalEmployees: "", presentToday: "" });

const [newRoleName, setNewRoleName] = useState("");
const [newRoleDescription, setNewRoleDescription] = useState("");


  const sidebarItems = [
    { name: "Role Management", path: "/role-management" },
    { name: "Department Management", path: "/department-management" },
    { name: "Title Management", path: "/title-management" },
    { name: "Grade Management", path: "/grade-management" },
    { name: "Create Employee", path: "/create-employee" },
    { name: "Manage Employee", path: "/manage-employee" },
  ];

  const roleOptions = {
    "Software Developer": "Builds and maintains software systems",
    "Project Manager": "Oversees project delivery",
    "HR Executive": "Manages HR activities",
    "Marketing Specialist": "Handles marketing campaigns",
    "Financial Analyst": "Analyzes financial data",
    "Sales Representative": "Handles client sales",
    "Team Lead": "Leads project teams",
    "UI/UX Designer": "Designs user experiences",
    "System Administrator": "Maintains IT systems",
    "Customer Support Agent": "Supports customers",
    "QA Tester": "Tests software quality",
    "Data Scientist": "Analyzes big data",
    "Business Analyst": "Gathers business requirements",
    "Technical Writer": "Writes technical documentation",
    "DevOps Engineer": "Manages deployments and operations",
  };

  const handleAddRole = () => {
    if (selectedRole && roleOptions[selectedRole]) {
      const newRole = {
        name: selectedRole,
        description: roleOptions[selectedRole],
        totalEmployees: 0,
        presentToday: 0,
      };
      setRoles([...roles, newRole]);
      setSelectedRole("");
    }
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditRoleData(roles[index]);
  };

  const handleSaveEdit = () => {
    const updatedRoles = [...roles];
    updatedRoles[editIndex] = editRoleData;
    setRoles(updatedRoles);
    setEditIndex(null);
  };

  const handleDeleteRole = (index) => {
    const updatedRoles = [...roles];
    updatedRoles.splice(index, 1);
    setRoles(updatedRoles);
  };

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNewRole = () => {
    if (newRoleName.trim() !== "" && newRoleDescription.trim() !== "") {
      const newRole = {
        name: newRoleName.trim(),
        description: newRoleDescription.trim(),
        totalEmployees: 0,
        presentToday: 0,
      };
      setRoles([...roles, newRole]);
      setNewRoleName("");
      setNewRoleDescription("");
    } else {
      alert("Please enter both Role Name and Description.");
    }
  };
  
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      {/* <div
        style={{
          ...styles.sidebar,
          width: isSidebarExpanded ? "200px" : "60px",
        }}
        onMouseEnter={() => setIsSidebarExpanded(true)}
        onMouseLeave={() => setIsSidebarExpanded(false)}
      >
        {sidebarItems.map((item) => (
          <div key={item.name} style={styles.sidebarItem}>
            {isSidebarExpanded ? item.name : item.name.charAt(0)}
          </div>
        ))}
      </div> */}
      <Sidebar/>

      {/* Main */}
      <div style={styles.main}>
        {/* Topbar */}
        {/* <div style={styles.topbar}>
          <div style={styles.logo}>EMS</div>
          <div style={styles.profileSection}>
            <span style={styles.profileName}>Admin</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              style={styles.profilePic}
            />
          </div>
        </div> */}
        <Topbar/>

        {/* Content */}
        <div style={styles.content}>
          <h2>Role Management</h2>

          {/* Dropdown to Add Roles */}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="roleDropdown" style={{ marginRight: "10px" }}>
              Select Existing Role:
            </label>
            <select
              id="roleDropdown"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              style={{ padding: "5px", fontSize: "16px" }}
            >
              <option value="">-- Select a Role --</option>
              {Object.keys(roleOptions).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddRole}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Add Role
            </button>
          </div>

          {/* Manual Entry for New Role */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ marginRight: "10px" }}>New Role Name:</label>
            <input
              type="text"
              value={newRoleName}
              onChange={(e) => setNewRoleName(e.target.value)}
              placeholder="Enter new role name"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ marginRight: "10px" }}>New Role Description:</label>
            <input
              type="text"
              value={newRoleDescription}
              onChange={(e) => setNewRoleDescription(e.target.value)}
              placeholder="Enter role description"
              style={inputStyle}
            />
          </div>

          <button
            onClick={handleAddNewRole}
            style={{
              marginBottom: "20px",
              padding: "5px 10px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Add New Role
          </button>


          {/* Search */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Search Roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Roles Table */}
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Role Name</th>
                <th>Description</th>
                <th>Total Employees</th>
                <th>Present Today</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.map((role, index) => (
                <tr key={index}>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editRoleData.name}
                        onChange={(e) => setEditRoleData({ ...editRoleData, name: e.target.value })}
                        style={inputStyle}
                      />
                    ) : (
                      role.name
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editRoleData.description}
                        onChange={(e) => setEditRoleData({ ...editRoleData, description: e.target.value })}
                        style={inputStyle}
                      />
                    ) : (
                      role.description
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        value={editRoleData.totalEmployees}
                        onChange={(e) => setEditRoleData({ ...editRoleData, totalEmployees: Number(e.target.value) })}
                        style={inputStyle}
                      />
                    ) : (
                      role.totalEmployees
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        value={editRoleData.presentToday}
                        onChange={(e) => setEditRoleData({ ...editRoleData, presentToday: Number(e.target.value) })}
                        style={inputStyle}
                      />
                    ) : (
                      role.presentToday
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <button style={editButtonStyle} onClick={handleSaveEdit}>Save</button>
                    ) : (
                      <button style={editButtonStyle} onClick={() => handleEditClick(index)}>Edit</button>
                    )}
                    <button style={deleteButtonStyle} onClick={() => handleDeleteRole(index)}>Delete</button>
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

// Styles
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  sidebar: {
    backgroundColor: "#2196F3",
    color: "white",
    paddingTop: "20px",
    transition: "width 0.3s",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sidebarItem: {
    margin: "10px 0",
    cursor: "pointer",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    width: "90%",
    transition: "background 0.3s",
  },
  main: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  topbar: {
    height: "60px",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2196F3",
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  profileName: {
    fontSize: "16px",
    fontWeight: "500",
  },
  profilePic: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  content: {
    flexGrow: 1,
    padding: "20px",
  },
};

const inputStyle = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const editButtonStyle = {
  backgroundColor: "#2196F3",
  color: "white",
  padding: "5px 10px",
  border: "none",
  borderRadius: "4px",
  marginRight: "5px",
  cursor: "pointer",
};

const deleteButtonStyle = {
  backgroundColor: "#f44336",
  color: "white",
  padding: "5px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default RoleManagement;
