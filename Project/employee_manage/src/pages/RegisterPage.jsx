import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Registration logic comes later
    navigate("/login"); // After successful register, redirect to login
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Create Your EMS Account</h1>
      <div style={styles.card}>
        <form style={styles.form} onSubmit={handleRegister}>
          <input type="text" placeholder="Username" required style={styles.input} />
          <input type="password" placeholder="Password" required style={styles.input} />
          <input type="password" placeholder="Confirm Password" required style={styles.input} />
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <p style={styles.loginLink}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #00c6ff, #0072ff)", // Light Blue to Dark Blue
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  heading: {
    color: "white",
    fontSize: "32px",
    textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    padding: "12px",
    fontSize: "18px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#2196F3",
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

export default RegisterPage;
