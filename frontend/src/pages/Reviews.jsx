import { useEffect, useState } from "react";
import { getReviews } from "../services/reviewService";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const data = await getReviews();
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="reviews-page">
      <h1>Community Reviews</h1>
      <p className="review-count">
        {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"} Posted
      </p>

      {reviews.length === 0 ? (
        <p>No reviews have been posted yet.</p>
      ) : (
        [...reviews]
          .sort(
            (a, b) =>
              new Date(b.createdAt) -
              new Date(a.createdAt)
          )
          .map((review) => (
            <div key={review._id} className="review-card">
              <h3>{review.gameTitle}</h3>

              <p className="review-user">
                👤 <strong>{review.username}</strong>
              </p>

              <p className="review-stars">
                {"⭐".repeat(review.rating)}
                <span> ({review.rating}/5)</span>
              </p>

              <p className="review-text">
                "{review.review}"
              </p>

              <small className="review-date">
                Posted on {new Date(review.createdAt).toLocaleDateString()}
              </small>

              <hr />
            </div>
          ))
      )}
    </div>
  );
}

export default Reviews;