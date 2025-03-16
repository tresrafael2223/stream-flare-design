
import { Star } from "lucide-react";
import { useState } from "react";

interface StarRatingProps {
  initialRating?: number;
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
}

const StarRating = ({ 
  initialRating = 0, 
  readonly = false,
  onRatingChange 
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    if (readonly) return;
    
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          fill={star <= (hoverRating || rating) ? "#9b87f5" : "transparent"}
          color={star <= (hoverRating || rating) ? "#9b87f5" : "#6E59A5"}
          className={`rating-star ${readonly ? "cursor-default" : ""}`}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
          onClick={() => handleRatingChange(star)}
        />
      ))}
      <span className="text-sm text-gray-400 ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
