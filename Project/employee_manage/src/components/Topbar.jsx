// components/Topbar.jsx
function Topbar() {
    return (
      <div style={styles.topbar}>
        <div style={styles.logo}>EMS</div>
        <div style={styles.profileSection}>
          <span style={styles.profileName}>Admin</span>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            style={styles.profilePic}
          />
        </div>
      </div>
    );
  }
  
  const styles = {
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
  };
  
  export default Topbar;
  