import React, { createContext, useState, useContext } from "react";

// Create a context for reviews
const ReviewContext = createContext();

// Context Provider
export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  // Function to add a review
  const addReview = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  // Function to update a review
  const updateReview = (id, updatedReview) => {
    setReviews((prev) =>
      prev.map((rev, index) => (index === id ? updatedReview : rev))
    );
  };

    const deleteReview = (id) => {
    setReviews((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, updateReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

// Custom hook to use the ReviewContext
export const useReviewContext = () => useContext(ReviewContext);
