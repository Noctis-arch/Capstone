import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link
      to={`/game/${game.gameID}`}
      state={{ game }}
      className="game-link"
    >
      <div className="game-card">
        <img src={game.thumb} alt={game.title} />

        <div className="game-info">
          <h3>{game.title}</h3>

          <p className="sale-price">
            ${game.salePrice}
          </p>

          <p className="normal-price">
            Regular: ${game.normalPrice}
          </p>

          <p className="discount">
            Save {Math.round(game.savings)}%
          </p>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;