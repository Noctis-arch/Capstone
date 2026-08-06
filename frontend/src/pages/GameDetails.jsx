import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getReviews } from "../services/reviewService";
import ReviewForm from "../components/ReviewForm";

function GameDetails() {
  const location = useLocation();
  const game = location.state?.game;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadReviews();
  }, []);

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
            <p>{review.review}</p>
          </div>
        ))
      )}

      <ReviewForm game={game} />
    </div>
  );
}

export default GameDetails;