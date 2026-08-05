import GameCard from "./GameCard";

function GameList({ games }) {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard key={game.dealID} game={game} />
      ))}
    </div>
  );
}

export default GameList;