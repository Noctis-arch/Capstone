import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getReviews, deleteReview, } from "../services/reviewService";
import ReviewForm from "../components/ReviewForm";

function GameDetails() {
  const location = useLocation();
  const game = location.state?.game;
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);

  const loadReviews = async () => {
    try {
      const data = await getReviews(game.gameID);
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm(
        "Delete this review?"
      );

      if (!confirmed) return;

      await deleteReview(id);
      await loadReviews();
    } catch (error) {
      console.error(error);
    }
  };

  if (!game) {
    return <h2>Game not found.</h2>;
  }

  return (
    <div className="game-details">
      <h1>{game.title}</h1>

      <img src={game.thumb} alt={game.title} />

      <h2>${game.salePrice}</h2>

      <p>Regular Price: ${game.normalPrice}</p>

      <p>You Save: {Math.round(game.savings)}%</p>

      <hr />

      <h2>User Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="review-card">
            <h3>{review.username}</h3>

            <p> {review.rating}/5</p>

            <p>
              {"⭐".repeat(review.rating)}
            </p>

            <p>{review.review}</p>

            <small>
              Posted{" "}
              {new Date(review.createdAt).toLocaleDateString()}
            </small>

            <button onClick={() => setEditingReview(review)}>
              Edit
            </button>

            <button onClick={() => handleDelete(review._id)}>
              Delete
            </button>
          </div>
        ))
      )}
      {editingReview && (
        <p>Editing review by {editingReview.username}</p>
      )}
      <ReviewForm
        game={game}
        editingReview={editingReview}
        setEditingReview={setEditingReview}
        onReviewAdded={loadReviews}
      />
    </div>
  );
}

export default GameDetails;