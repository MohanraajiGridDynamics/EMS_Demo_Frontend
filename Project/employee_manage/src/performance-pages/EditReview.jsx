import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useReviewContext } from "./ReviewContext";

function EditReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { reviews, updateReview } = useReviewContext();

  const [formData, setFormData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const reviewToEdit = reviews[parseInt(id)];
    if (reviewToEdit) {
      setFormData(reviewToEdit);
    } else {
      setNotFound(true);
    }
  }, [id, reviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateReview(parseInt(id), formData);
    navigate("/performance-review");
  };

  if (notFound) {
    return <div style={{ padding: 20 }}><h2>Review not found!</h2></div>;
  }

  if (!formData) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Edit Performance Review</h2>
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
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={styles.select}
        >
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
          <button type="submit" style={styles.submit}>Update Review</button>
          <button type="button" onClick={() => navigate("/performance-review")} style={styles.cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditReview;

// 💅 Styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  submit: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancel: {
    padding: "10px 20px",
    backgroundColor: "#ccc",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
