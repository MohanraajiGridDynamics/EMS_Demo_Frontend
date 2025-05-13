import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ColorContext } from "../ColorContext"; // adjust path

function HomePage() {
  const navigate = useNavigate();
  const { primaryColor, setPrimaryColor } = useContext(ColorContext);

  const colors = ["#2196F3", "#4CAF50", "#FF5722", "#9C27B0"]; // Blue, Green, Orange, Purple

  return (
    <div style={{ ...styles.container, background: `linear-gradient(to right, ${primaryColor}, #ffffff)`}}>
      <div style={styles.palette}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => setPrimaryColor(color)}
            style={{ ...styles.colorCircle, backgroundColor: color }}
          ></div>
        ))}
      </div>

      <h1>Welcome to EMS</h1>

      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, backgroundColor: primaryColor }} onClick={() => navigate("/login")}>
          Login
        </button>
        <button style={{ ...styles.button, backgroundColor: primaryColor }} onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
  },
  palette: {
    display: "flex",
    gap: "10px",
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  colorCircle: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    cursor: "pointer",
    border: "2px solid white",
    boxShadow: "0 0 5px rgba(0,0,0,0.3)",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default HomePage;
