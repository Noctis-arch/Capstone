import axios from "axios";

const API_URL = "https://www.cheapshark.com/api/1.0/deals";

export const getGames = async () => {
  const response = await axios.get(API_URL, {
    params: {
      pageSize: 12,
    },
  });

  return response.data;
};