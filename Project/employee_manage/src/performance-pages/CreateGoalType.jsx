import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoalContext } from './GoalContext';

function CreateGoalType() {
  const { addGoalType } = useGoalContext();
  const navigate = useNavigate();

  const [goalName, setGoalName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGoalType = {
      goalName,
      description,
      category,
      status,
    };

    addGoalType(newGoalType);
    navigate('/performance-review/goal-types');  // Redirect to the dashboard after creation
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Create New Goal Type</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Goal Name:</label>
          <input
            type="text"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={styles.select}
          >
            <option value="">Select Category</option>
            <option value="Technical">Technical</option>
            <option value="Personal">Personal</option>
            <option value="Leadership">Leadership</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            style={styles.select}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div style={styles.buttons}>
          <button type="submit" style={styles.submitBtn}>Create Goal Type</button>
          <button
            type="button"
            style={styles.cancelBtn}
            onClick={() => navigate('/performance-review/goal-types')} // Go back to dashboard without submitting
          >
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
    fontSize: "28px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    height: "100px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  submitBtn: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelBtn: {
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    color: "black",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CreateGoalType;
