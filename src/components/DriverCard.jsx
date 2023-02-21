import React from "react";
import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <img width="50" src={img} alt={name} />
      <p>{name}</p>
      <Rating>{rating}</Rating>
      <div>
        <span>{car.model}</span>
        <span>{car.licensePlate}</span>
      </div>
    </div>
  );
}

export default DriverCard;
