import React, { useState } from "react";

function Carousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const rightClick = () => {
    imageIndex === images.length - 1
      ? setImageIndex(imageIndex)
      : setImageIndex(imageIndex + 1);
  };
  const leftClick = () => {
    imageIndex === 0
      ? setImageIndex(imageIndex)
      : setImageIndex(imageIndex - 1);
  };
  return (
    <div>
      <img src={images[imageIndex]} alt="carousel" />
      <div>
        <button onClick={leftClick}>Left</button>
        <button onClick={rightClick}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
