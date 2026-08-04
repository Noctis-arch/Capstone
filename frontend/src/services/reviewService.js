import axios from "axios";

const API_URL = "http://localhost:3000/reviews";

export const getReviews = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createReview = async (reviewData) => {
  const response = await axios.post(API_URL, reviewData);
  return response.data;
};

export const updateReview = async (id, reviewData) => {
  const response = await axios.put(`${API_URL}/${id}`, reviewData);
  return response.data;
};

export const deleteReview = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};