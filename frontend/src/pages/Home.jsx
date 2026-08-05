import { useEffect, useState } from "react";
import { getGames } from "../services/gameService";
import GameList from "../components/GameList";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getGames();
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadGames();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to GameVault</h1>

      <p>
        Discover new games, explore popular titles, and find the best PC game
        deals.
      </p>

      <GameList games={games} />
    </div>
  );
}

export default Home;