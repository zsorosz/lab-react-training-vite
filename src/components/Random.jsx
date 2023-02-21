import React from "react";

function Random({ min, max }) {
  return <div>{Math.floor(Math.random() * (max - min) + min)}</div>;
}

export default Random;
