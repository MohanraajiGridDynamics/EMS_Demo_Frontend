import React from "react";
import Topbar from "./components/Topbar";
import {
  Bar,
  Pie,
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from "chart.js";

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TAReports = () => {
  // 1. Mock Data: Candidates per Stage
  const stageData = {
    labels: ["Applied", "Screening", "Technical", "HR", "Offered", "Joined"],
    datasets: [
      {
        label: "No. of Candidates",
        data: [40, 30, 20, 15, 10, 7],
        backgroundColor: "#4c8bf5",
      },
    ],
  };

  // 2. Mock Data: Time to Hire
  const timeData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Avg Time to Hire (Days)",
        data: [25, 22, 28, 18, 20],
        backgroundColor: "#33cc99",
      },
    ],
  };

  // 3. Mock Data: Success Rate per Role
  const roleData = {
    labels: ["Developer", "QA", "Designer", "PM"],
    datasets: [
      {
        label: "Success Rate",
        data: [60, 40, 25, 35],
        backgroundColor: ["#f54242", "#f5a142", "#42f56b", "#42bff5"],
      },
    ],
  };

  return (
    <>
    <Topbar />
    <div style={{ padding: "80px 20px 40px" }}>
      <h2 style={{ textAlign: "center", fontSize: "26px", marginBottom: "20px" }}>
        TA Reports Dashboard
      </h2>

      {/* Candidates per Stage */}
      <section style={sectionStyle}>
        <h3 style={headingStyle}>Candidates per Stage</h3>
        <Bar data={stageData} options={{ responsive: true }} />
      </section>

      {/* Time to Hire */}
      <section style={sectionStyle}>
        <h3 style={headingStyle}>Average Time to Hire (Monthly)</h3>
        <Line data={timeData} options={{ responsive: true }} />
      </section>

      {/* Success Rate */}
      <section style={sectionStyle}>
        <h3 style={headingStyle}>Success Rate per Role</h3>
        <Pie data={roleData} options={{ responsive: true }} />
      </section>
    </div>
    </>
  );
};

const sectionStyle = {
  marginBottom: "40px",
  background: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const headingStyle = {
  marginBottom: "15px",
  fontSize: "20px",
  fontWeight: "bold",
};

export default TAReports;
