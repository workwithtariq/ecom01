// src/components/Reviews/Reviews.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews for the product from the server
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews/${productId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [productId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review._id} className="border-b pb-4">
              <p className="text-gray-800"><strong>{review.user}</strong></p>
              <p className="text-sm text-gray-600">{review.comment}</p>
              <p className="text-sm text-yellow-500">Rating: {review.rating}/5</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet. Be the first to leave a review!</p>
      )}
    </div>
  );
};

export default Reviews;
