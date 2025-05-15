import React from "react";
import { useNavigate } from "react-router-dom";
import { useReviewContext } from "./ReviewContext";

function PerformanceReview() {
  const navigate = useNavigate();
  const { reviews, deleteReview } = useReviewContext();

  const handleAddReview = () => {
    navigate("/performance-review/create");
  };

  const handleViewCharts = () => {
    navigate("/performance-review/charts");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Performance Review Panel</h1>
      <p style={styles.subheading}>Manage and analyze employee performance.</p>

      {/* 🔍 Filters */}
      <div style={styles.filters}>
        <input type="text" placeholder="Search by Employee" style={styles.input} />
        <select style={styles.select}>
          <option>All Departments</option>
          <option>Engineering</option>
          <option>HR</option>
        </select>
        <select style={styles.select}>
          <option>Status</option>
          <option>Pending</option>
          <option>Finalized</option>
        </select>
        <button style={styles.button}>Filter</button>
      </div>

      {/* 📊 Actions */}
      <div style={styles.actions}>
        <button style={styles.actionBtn} onClick={handleAddReview}>+ Add Review</button>
        <button style={styles.actionBtn} onClick={handleViewCharts}>📈 View Insights</button>
        <button style={styles.actionBtn} onClick={() => navigate("/performance-review/goal-types")}>Goals</button>
      </div>

      {/* 📋 Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Reviewer</th>
            <th>Period</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                No reviews available. Add one!
              </td>
            </tr>
          ) : (
            reviews.map((r, index) => (
              <tr key={index}>
                <td>{r.employeeName}</td>
                <td>{r.reviewerName}</td>
                <td>{r.reviewPeriod}</td>
                <td>{r.rating}</td>
                <td>{r.status}</td>
                <td>
                  <button onClick={() => navigate(`/performance-review/view/${index}`)}>View</button>
                  <button onClick={() => navigate(`/performance-review/edit/${index}`)}>Edit</button>
                  <button onClick={() => deleteReview(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

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
  filters: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    width: "200px",
  },
  select: {
    padding: "8px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  actions: {
    marginBottom: "20px",
    display: "flex",
    gap: "10px",
  },
  actionBtn: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#f8f8f8",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
};

export default PerformanceReview;
