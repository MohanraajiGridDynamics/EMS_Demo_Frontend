import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReviewContext } from "./ReviewContext"; // Correct path for the context

function ViewReview() {
  const navigate = useNavigate();
  const { reviews, addReview } = useReviewContext(); // We can use context to fetch and add reviews
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [sortBy, setSortBy] = useState("date"); // Sorting by date or rating

  // Search functionality
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setFilteredReviews(
      reviews.filter(
        (review) =>
          review.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.reviewerName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, reviews]);

  // Sorting functionality
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const sortReviews = (reviews) => {
    if (sortBy === "date") {
      return reviews.sort((a, b) => new Date(b.reviewPeriod) - new Date(a.reviewPeriod));
    } else if (sortBy === "rating") {
      return reviews.sort((a, b) => b.rating - a.rating);
    }
    return reviews;
  };

  const handleDelete = (id) => {
    // Delete review logic, assuming an id exists
    const updatedReviews = reviews.filter((review) => review.id !== id);
    addReview(updatedReviews); // Update context state with the new reviews list
  };

  const handleEdit = (id) => {
    navigate(`/performance-review/edit/${id}`); // Navigate to the edit page for the review
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Performance Reviews</h2>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by Employee or Reviewer"
          value={searchQuery}
          onChange={handleSearch}
          style={styles.searchInput}
        />

        <select onChange={handleSort} value={sortBy} style={styles.select}>
          <option value="date">Sort by Date</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      <div style={styles.reviewsContainer}>
        {filteredReviews.length === 0 ? (
          <p>No reviews found matching your search criteria.</p>
        ) : (
          sortReviews(filteredReviews).map((review) => (
            <div key={review.id} style={styles.reviewCard}>
              <h3>{review.employeeName}</h3>
              <p>Reviewer: {review.reviewerName}</p>
              <p>Review Period: {review.reviewPeriod}</p>
              <p>Rating: {review.rating}</p>
              <p>Status: {review.status}</p>
              <p>Comments: {review.comments}</p>

              <div style={styles.actions}>
                <button onClick={() => handleEdit(review.id)} style={styles.editButton}>
                  Edit
                </button>
                <button onClick={() => handleDelete(review.id)} style={styles.deleteButton}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "20px auto",
    padding: "20px",
    maxWidth: "900px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  searchInput: {
    padding: "10px",
    width: "60%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "10px",
    width: "30%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  reviewsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  reviewCard: {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ViewReview;
