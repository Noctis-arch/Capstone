import { useEffect, useState } from "react";
import { getGames, searchGames } from "../services/gameService";
import GameList from "../components/GameList";
import SearchBar from "../components/SearchBar";

function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);

        const data = await getGames();
        setGames(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const handleSearch = async (title) => {
    try {
      setLoading(true);

      const data = await searchGames(title);

      const filteredGames = data.filter((game) =>
        game.title.toLowerCase().includes(title.toLowerCase())
      );

      setGames(filteredGames);
      setSearched(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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

      {loading ? (
        <h2>Loading games...</h2>
      ) : games.length === 0 && searched ? (
        <h2>No games found.</h2>
      ) : (
        <GameList games={games} />
      )}
    </div>
  );
}

export default Home;