import { useState } from "react";
import { createReview } from "../services/reviewService";

function ReviewForm() {
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!review.trim()) return;

        try {
            await createReview({
                username,
                rating,
                review,
            });

            alert("Review submitted!");

            setReview("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Write a Review</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br />
            <br />
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