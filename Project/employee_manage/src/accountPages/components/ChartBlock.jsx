import React from "react";

const ChartBlock = ({ percentage }) => {
  const circleStyle = {
    background: `conic-gradient(#4caf50 ${percentage * 3.6}deg, #ddd 0deg)`,
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.circle, ...circleStyle }}>
        <span style={styles.percentText}>{percentage}%</span>
      </div>
      <p style={styles.label}>Engagement Level</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
  },
  circle: {
    height: "120px",
    width: "120px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
  percentText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#555",
  },
};

export default ChartBlock;
