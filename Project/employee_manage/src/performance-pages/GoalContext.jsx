import React, { createContext, useContext, useState } from "react";

// Creating the GoalContext
const GoalContext = createContext();

// Custom hook to access the GoalContext
export const useGoalContext = () => {
  return useContext(GoalContext);
};

// GoalContextProvider to wrap around your app components
export const GoalContextProvider = ({ children }) => {
  const [goalTypes, setGoalTypes] = useState([
    {
      id: 1,
      goalName: "Improve Coding Skills",
      description: "Work on algorithms and data structures to enhance coding skills.",
      category: "Technical",
      status: "Active",
    },
    {
      id: 2,
      goalName: "Improve Team Collaboration",
      description: "Focus on better communication and teamwork in projects.",
      category: "Behavioral",
      status: "Active",
    },
    {
      id: 3,
      goalName: "Leadership Training",
      description: "Attend leadership workshops and enhance managerial skills.",
      category: "Leadership",
      status: "Inactive",
    },
  ]);

  // Function to add a new goal
  const addGoalType = (newGoal) => {
    setGoalTypes((prevGoalTypes) => [
      ...prevGoalTypes,
      { ...newGoal, id: goalTypes.length + 1 }, // Add an incrementing id
    ]);
  };

  // Function to update an existing goal
  const updateGoalType = (updatedGoal) => {
    setGoalTypes((prevGoalTypes) =>
      prevGoalTypes.map((goal) =>
        goal.id === updatedGoal.id ? updatedGoal : goal
      )
    );
  };

  // Function to delete a goal (soft delete)
  const deleteGoalType = (id) => {
    setGoalTypes((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, status: "Inactive" } : goal
      )
    );
  };

  return (
    <GoalContext.Provider
      value={{
        goalTypes,
        addGoalType,  // Providing the addGoalType function
        updateGoalType,  // Providing the updateGoalType function
        deleteGoalType,  // Providing the deleteGoalType function
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};
