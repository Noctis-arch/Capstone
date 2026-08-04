import Review from "../models/Review.js";


export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};