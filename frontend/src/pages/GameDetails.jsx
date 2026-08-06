import { useLocation } from "react-router-dom";

function GameDetails() {
  const location = useLocation();
  const game = location.state?.game;

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
    </div>
  );
}

export default GameDetails;