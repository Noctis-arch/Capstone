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

      {reviews.length === 0 ? (
        <p>No reviews have been posted yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="review-card">
            <h3>{review.gameTitle}</h3>

            <p>
              <strong>{review.username}</strong>
            </p>

            <p>{"⭐".repeat(review.rating)}</p>

            <p>{review.review}</p>

            <small>
              {new Date(review.createdAt).toLocaleDateString()}
            </small>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Reviews;