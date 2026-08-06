import { useState } from "react";

function ReviewForm() {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(review);

    setReview("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Write a Review</h2>

      <textarea
        rows="5"
        placeholder="Share your thoughts..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <br />

      <button type="submit">
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;