import { useParams } from "react-router-dom";

function GameDetails() {
  const { id } = useParams();

  return (
    <div className="game-details">
      <h1>Game Details</h1>

      <p>Game ID: {id}</p>
    </div>
  );
}

export default GameDetails;