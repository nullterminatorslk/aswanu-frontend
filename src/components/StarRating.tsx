import React from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => {
  return (
    <FaStar
      className={`inline text-2xl ${
        filled ? "text-yellow-400" : "text-gray-300"
      }`}
    />
  );
};

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex gap-1.5">
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};
export default StarRating;
