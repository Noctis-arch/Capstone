import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    onSearch(search);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;