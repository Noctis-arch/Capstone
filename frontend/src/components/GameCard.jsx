function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.thumb} alt={game.title} />

      <h3>{game.title}</h3>

      <p>
        <strong>Sale Price:</strong> ${game.salePrice}
      </p>

      <p>
        <strong>Normal Price:</strong> ${game.normalPrice}
      </p>

      <p>
        <strong>You Save:</strong> {game.savings.slice(0, 5)}%
      </p>
    </div>
  );
}

export default GameCard;