import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';


const tooltipArray = [
  "Terrible",
  "Terrible+",
  "Bad",
  "Bad+",
  "Average",
  "Average+",
  "Great",
  "Great+",
  "Awesome",
  "Awesome+"
];

const Index = () => {
  const [rating, setRating] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false)

  const handleRating = (rate) => {
    setRating(rate);
  };
  const handlePointerMove = () => {
    setShowTooltip(true)
  }
  const handlePointerLeave = () => {
    setShowTooltip(false)
  }
  return (
    <>
    <div>
      <h2>Star Rating Component</h2>
      <Rating
        ratingValue={rating}
        onClick={handleRating}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        showTooltip={showTooltip}
        tooltipArray={tooltipArray}
        allowFraction
      />
      <p>Selected Rating: {rating}</p>
    </div>
    </>
  );
};

export default Index;