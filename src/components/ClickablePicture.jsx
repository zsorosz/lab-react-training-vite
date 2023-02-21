import React, { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);
  let toggledImage = img;
  const toggleImage = () => {
    setIsClicked(!isClicked);
  };
  isClicked ? (toggledImage = imgClicked) : (toggledImage = img);
  return (
    <div>
      <img src={toggledImage} alt="toggledImage" onClick={toggleImage} />
    </div>
  );
}

export default ClickablePicture;
