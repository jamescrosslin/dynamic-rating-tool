import React, { useState } from "react";
import Star from "./Star";

function StarRating() {
  // Initialize a 'rating' state
  const [rating, setRating] = useState(0);
  // Write a function that returns 5 Star components
  const makeStars = () => {
    return Array(5)
      .fill()
      .map((_, i) => {
        const id = i + 1;
        return (
          <Star
            rateCourse={handleRating}
            id={id}
            key={id.toString()}
            selected={id <= rating && rating > 0}
          />
        );
      });
  };
  console.log(makeStars());

  // Write an event handler that updates the rating state.
  const handleRating = (num) => {
    setRating(() => num);
  };

  return <ul className="course--stars">{makeStars()}</ul>;
}

export default StarRating;
