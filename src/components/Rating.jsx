import React from "react";

function Rating({ children }) {
  const roundedRating = Math.ceil(children);
  let starsArr = [];
  for (let i = 0; i < 5; i++) {
    i < roundedRating ? starsArr.push(true) : starsArr.push(false);
  }
  console.log(starsArr);
  return (
    <div>
      {starsArr.map((star) => (
        <span>{star === true ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default Rating;
