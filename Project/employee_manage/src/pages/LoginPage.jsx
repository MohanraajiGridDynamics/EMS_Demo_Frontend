import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(""); // Track selected role

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Please select a role before logging in.");
      return;
    }
    // Later: Validate login credentials properly
    navigate("/admin-dashboard"); // Redirect after "login"
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Login to EMS</h1>
      <div style={styles.card}>
        <div style={styles.roleSwitchContainer}>
          <button
            style={{
              ...styles.switchButton,
              backgroundColor: selectedRole === "Admin" ? "#4CAF50" : "#f0f0f0",
              color: selectedRole === "Admin" ? "white" : "black",
            }}
            onClick={() => handleRoleSelect("Admin")}
          >
            Admin
          </button>
          <button
            style={{
              ...styles.switchButton,
              backgroundColor: selectedRole === "Employee" ? "#4CAF50" : "#f0f0f0",
              color: selectedRole === "Employee" ? "white" : "black",
            }}
            onClick={() => handleRoleSelect("Employee")}
          >
            Employee
          </button>
        </div>

        <form style={styles.form} onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required style={styles.input} />
          <input type="password" placeholder="Password" required style={styles.input} />
          <button type="submit" style={styles.loginButton}>Login</button>
        </form>
        <p style={styles.loginLink}>
          No account?{" "}
          <span style={styles.link} onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #FFD700, #1E90FF)", // Gold to Blue
    padding: "20px",
  },
  h1: {
    paddingBottom: "20px",
    color: "white",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },
  roleSwitchContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  switchButton: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "2px solid #ccc",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  loginButton: {
    padding: "12px",
    fontSize: "18px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
  },
  loginLink: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#2196F3",
    cursor: "pointer",
    textDecoration: "underline",
    marginLeft: "5px",
  },
};

export default LoginPage;
