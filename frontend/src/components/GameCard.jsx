function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.thumb} alt={game.title} />

      <div className="game-info">
        <h3>{game.title}</h3>

        <p className="sale-price">${game.salePrice}</p>

        <p className="normal-price">
          Regular: ${game.normalPrice}
        </p>

        <p className="discount">
          Save {Math.round(game.savings)}%
        </p>
      </div>
    </div>
  );
}

export default GameCard;