import axios from "axios";

const API = "https://www.cheapshark.com/api/1.0";

export const getGames = async () => {
  const response = await axios.get(`${API}/deals?pageSize=20`);
  return response.data;
};

export const searchGames = async (title) => {
  const response = await axios.get(
    `${API}/deals?title=${encodeURIComponent(title)}&pageSize=20`
  );

  return response.data;
};