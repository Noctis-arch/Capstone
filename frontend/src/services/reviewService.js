import axios from "axios";

const API = "http://localhost:3000/reviews";

export const getReviews = async (gameId) => {
  const response = await axios.get(API, {
    params: {
      gameId,
    },
  });

  return response.data;
};

export const createReview = async (review) => {
  const response = await axios.post(API, review);
  return response.data;
};

export const updateReview = async (id, review) => {
  const response = await axios.put(`${API}/${id}`, review);
  return response.data;
};

export const deleteReview = async (id) => {
  await axios.delete(`${API}/${id}`);
};