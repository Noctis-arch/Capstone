import { useEffect, useState } from "react";
import { createReview, updateReview, } from "../services/reviewService";

function ReviewForm({
    game,
    editingReview,
    setEditingReview,
    onReviewAdded,
}) {
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");

    useEffect(() => {
        if (editingReview) {
            setUsername(editingReview.username);
            setRating(editingReview.rating);
            setReview(editingReview.review);
        }
    }, [editingReview]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!review.trim()) return;

        try {
            if (editingReview) {
                await updateReview(editingReview._id, {
                    gameId: game.gameID,
                    gameTitle: game.title,
                    username,
                    rating,
                    review,
                });

                setEditingReview(null);

            } else {
                await createReview({
                    gameId: game.gameID,
                    gameTitle: game.title,
                    username,
                    rating,
                    review,
                });
            }

            await onReviewAdded();

            alert("Review submitted!");

            setUsername("");
            setRating(5);
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
            <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
            >
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
            </select>

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
                {editingReview ? "Update Review" : "Submit Review"}
            </button>
        </form>
    );
}

export default ReviewForm;