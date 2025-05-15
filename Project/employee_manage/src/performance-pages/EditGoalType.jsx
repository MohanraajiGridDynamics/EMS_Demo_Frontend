import React, { useState, useEffect } from "react";
import { useGoalContext } from "./GoalContext";  // Importing GoalContext hook
import { useNavigate, useParams } from "react-router-dom"; // To get the goal ID from the URL

function EditGoalType() {
  const { goalTypes, updateGoalType } = useGoalContext(); // Use context to get goal types and the update function
  const navigate = useNavigate();
  const { id } = useParams(); // Get the goal ID from URL params

  // State to store the form data
  const [goalName, setGoalName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
    // Find the goal to edit based on the id from the URL params
    const goal = goalTypes.find((goal) => goal.id === parseInt(id));

    if (goal) {
      setGoalName(goal.goalName);
      setDescription(goal.description);
      setCategory(goal.category);
      setStatus(goal.status);
    } else {
      // Handle case where goal with given ID doesn't exist (maybe redirect to the dashboard)
      navigate("/performance-review/goal-types");
    }
  }, [goalTypes, id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedGoal = {
      id: parseInt(id),  // Keep the existing goal's ID
      goalName,
      description,
      category,
      status,
    };

    // Call the update function from context to update the goal
    updateGoalType(updatedGoal);
    navigate("/performance-review/goal-types"); // Redirect to the goal types dashboard after saving changes
  };

  return (
    <div>
      <h1>Edit Goal Type</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Goal Name</label>
          <input
            type="text"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Technical">Technical</option>
            <option value="Behavioral">Behavioral</option>
            <option value="Leadership">Leadership</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="submit">Update Goal</button>
      </form>
    </div>
  );
}

export default EditGoalType;
