import React from "react";

const StatusBadge = ({ status }) => {
  const getColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "#4caf50"; // green
      case "pending":
        return "#ff9800"; // orange
      case "lost":
        return "#f44336"; // red
      case "follow-up":
        return "#2196f3"; // blue
      default:
        return "#9e9e9e"; // grey
    }
  };

  return (
    <span
      style={{
        padding: "5px 12px",
        borderRadius: "20px",
        backgroundColor: getColor(status),
        color: "#fff",
        fontSize: "0.85rem",
        fontWeight: "bold",
        textTransform: "capitalize",
        display: "inline-block",
        minWidth: "80px",
        textAlign: "center",
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
