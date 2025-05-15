import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGoalContext } from "./GoalContext";

const GoalTypeDashboard = () => {
  const navigate = useNavigate();
  const { goalTypes, deleteGoalType } = useGoalContext(); // Using context to manage goal types
  const [filteredGoals, setFilteredGoals] = useState(goalTypes);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  // Search and filter logic
  useEffect(() => {
    let filtered = goalTypes;

    // Filter by name
    if (searchTerm) {
      filtered = filtered.filter((goal) =>
        goal.goalName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((goal) => goal.category === selectedCategory);
    }

    // Filter by status
    if (selectedStatus !== "All Status") {
      filtered = filtered.filter((goal) => goal.status === selectedStatus);
    }

    setFilteredGoals(filtered);
  }, [searchTerm, selectedCategory, selectedStatus, goalTypes]);

  const handleAddGoal = () => {
    navigate("/performance-review/goal-types/add");
  };

  const handleEditGoal = (id) => {
    navigate(`/performance-review/goal-types/edit/${id}`);
  };

  const handleDeleteGoal = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this goal?");
    if (confirmDelete) {
      deleteGoalType(id); // Call the delete function from context
    }
  };

  const handleViewGoal = (id) => {
    console.log(`Viewing goal with ID: ${id}`);
    // Later, we can implement this to navigate to a detailed view page
    // navigate(`/performance-review/goal-types/view/${id}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Manage Goal Types</h1>
      <p style={styles.subheading}>View, add, edit, or delete goal types.</p>

      {/* 🔍 Filters */}
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search by Goal Name"
          style={styles.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          style={styles.select}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option>Technical</option>
          <option>Behavioral</option>
          <option>Leadership</option>
        </select>
        <select
          style={styles.select}
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button style={styles.button} onClick={handleAddGoal}>
          + Add New Goal
        </button>
      </div>

      {/* 📋 Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Goal Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredGoals.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                No goals found. Add one!
              </td>
            </tr>
          ) : (
            filteredGoals.map((goal, index) => (
              <tr key={goal.id}>
                <td>{goal.goalName}</td>
                <td>{goal.description}</td>
                <td>{goal.category}</td>
                <td>{goal.status}</td>
                <td>
                   <button
                    onClick={() => navigate(`/performance-review/goal-types/view/${goal.id}`)}
                    style={styles.button}
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEditGoal(goal.id)}
                    style={styles.button}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteGoal(goal.id)}
                    style={styles.button}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
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
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    backgroundColor: "#f8f8f8",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
};

export default GoalTypeDashboard;
