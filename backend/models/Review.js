import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    gameId: {
      type: Number,
      required: true,
    },
    gameTitle: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;