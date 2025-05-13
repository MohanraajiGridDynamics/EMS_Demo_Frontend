import { useState } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/Topbar";

function AdminDashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const sidebarItems = [
    { name: "Role Management", path: "/role-management" },
    { name: "Department Management", path: "/department-management" },
    { name: "Title Management", path: "/title-management" },
    { name: "Grade Management", path: "/grade-management" },
    { name: "Create Employee", path: "/create-employee" },
    { name: "Manage Employee", path: "/manage-employee" },
  ];

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

      {/* Main Section */}
      <div style={styles.main}>
        {/* Topbar */}
        {/* <div style={styles.topbar}>
          <div style={styles.logo}>EMS</div>
          <div style={styles.profileSection}>
            <span style={styles.profileName}>Admin</span>
            <img
              src="https://via.placeholder.com/40" // temporary photo
              alt="Profile"
              style={styles.profilePic}
            />
          </div>
        </div> */}
        <Topbar/>

        {/* Main Content */}
        <div style={styles.content}>
          <h1>Welcome Admin!</h1>
          <p>Select an option from the sidebar to manage the system.</p>
        </div>
      </div>
    </div>
  );
}

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

export default AdminDashboard;
