import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register the chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GoalDetail = () => {
  const { id } = useParams(); // Get the goal ID from URL
  const [goal, setGoal] = useState(null);

  // Simulating data fetching based on goal ID
  useEffect(() => {
    // Normally, fetch goal data based on ID
    const fetchedGoal = {
      id,
      goalName: `Goal ${id}`,
      description: "This is a detailed description of the goal.",
      category: "Technical",
      status: "Active",
      progress: 80, // percentage completion
      targetValue: 120,
      currentValue: 96,
      completionPercentage: 80, // Random example data
      goalStats: [10, 20, 30, 40, 50], // Some random data for chart
    };
    setGoal(fetchedGoal);
  }, [id]);

  // Chart Data
  const chartData = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
    datasets: [
      {
        label: "Progress over Time",
        data: goal ? goal.goalStats : [0, 0, 0, 0, 0], // Random data
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={styles.container}>
      {goal ? (
        <>
          <h1 style={styles.heading}>{goal.goalName}</h1>
          <p style={styles.subheading}>{goal.description}</p>

          <div style={styles.details}>
            <div>
              <strong>Category: </strong>{goal.category}
            </div>
            <div>
              <strong>Status: </strong>{goal.status}
            </div>
            <div>
              <strong>Progress: </strong>{goal.progress}% completed
            </div>
            <div>
              <strong>Target Value: </strong>{goal.targetValue}
            </div>
            <div>
              <strong>Current Value: </strong>{goal.currentValue}
            </div>
            <div>
              <strong>Completion Percentage: </strong>{goal.completionPercentage}%
            </div>
          </div>

          {/* Chart */}
          <div style={styles.chartContainer}>
            <h3>Progress Over Time</h3>
            <Bar data={chartData} />
          </div>
        </>
      ) : (
        <p>Loading goal details...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "5px",
  },
  subheading: {
    color: "#555",
    marginBottom: "20px",
  },
  details: {
    marginBottom: "20px",
  },
  chartContainer: {
    marginTop: "30px",
  },
};

export default GoalDetail;
