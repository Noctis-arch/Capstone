import { useEffect, useState } from "react";
import { getGames, searchGames } from "../services/gameService";
import GameList from "../components/GameList";
import SearchBar from "../components/SearchBar";

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

  const handleSearch = async (title) => {
    try {
      const data = await searchGames(title);

      console.log(data);

      const filteredGames = data.filter((game) =>
        game.title.toLowerCase().includes(title.toLowerCase())
      );

      setGames(filteredGames);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <h1>Welcome to GameVault</h1>

      <p>
        Discover new games, explore popular titles, and find the best PC game
        deals.
      </p>
      <SearchBar onSearch={handleSearch} />

      <GameList games={games} />
    </div>
  );
}

export default Home;