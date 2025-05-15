import React from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  navigator: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    height: "100vh"
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#333"
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#666"
  }
};

function Navigator() {
  const navigate = useNavigate();

  const emp = () => {
    navigate("/employee-admin-dashboard");
  };

  const performance = () => {
    navigate("/performance-review");
  }

  const account = () => {
    navigate("/account/manage-leads");
  }

  const demand = () => {
    navigate("/demand/manage-demands");
  }

  const ta = () => {
    navigate("/ta/candidate-register");
  }

  return (
    <div style={styles.navigator}>
      <h1 style={styles.title}>Employee Management System</h1>
      <p style={styles.subtitle}>Your one-stop solution for managing employees</p>

      <h2>Choose where to reach</h2>
      <button onClick={emp}>Employee Management Panel</button>
      <button onClick={performance}>Performance Analysation Panel</button>
      <button onClick={account}>Account Panel</button>
      <button onClick={demand}>Demand Panel</button>
      <button onClick={ta}>Talent Acqusation Panel</button>
      <button>Training Panel</button>
      <button>Finance Panel</button>
    </div>
  );
}

export default Navigator;
