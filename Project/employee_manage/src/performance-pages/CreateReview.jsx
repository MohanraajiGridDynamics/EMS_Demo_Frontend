import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReviewContext } from "./ReviewContext"; // Correct path for the context

function CreateReview() {
  const navigate = useNavigate();
  const { addReview } = useReviewContext(); // Make sure this is correctly imported and destructured

  const [formData, setFormData] = useState({
    employeeName: "",
    reviewerName: "",
    reviewPeriod: "",
    rating: "",
    status: "Pending",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(formData); // Calling the addReview function from context
    navigate("/performance-review"); // Redirect after submission
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create New Performance Review</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <label style={styles.label}>Employee Name</label>
        <input
          type="text"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Reviewer Name</label>
        <input
          type="text"
          name="reviewerName"
          value={formData.reviewerName}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Review Period</label>
        <input
          type="text"
          name="reviewPeriod"
          placeholder="e.g. Jan–Mar 2025"
          value={formData.reviewPeriod}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Rating (1.0 to 5.0)</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Status</label>
        <select name="status" value={formData.status} onChange={handleChange} style={styles.select}>
          <option value="Pending">Pending</option>
          <option value="Finalized">Finalized</option>
        </select>

        <label style={styles.label}>Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
          style={styles.textarea}
        />

        <div style={styles.buttonRow}>
          <button type="submit" style={styles.submit}>Submit Review</button>
          <button type="button" onClick={() => navigate("/performance-review")} style={styles.cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}


const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "500px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  select: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "vertical",
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  submit: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  cancel: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default CreateReview;
