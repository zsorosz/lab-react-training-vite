import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);
  let colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [buttonColor, setButtonColor] = useState(0);
  const buttonStyle = { backgroundColor: `${colors[buttonColor]}` };
  const incrementCount = () => {
    setCount(count + 1);
    setButtonColor(buttonColor);
    console.log(buttonColor);
  };
  return (
    <div>
      <button style={buttonStyle} onClick={incrementCount}>
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;
