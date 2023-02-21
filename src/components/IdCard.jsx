import React from "react";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <img src={picture} alt={firstName} />
      <p>Last Name: {lastName}</p>
      <p>First Name: {firstName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth.toLocaleDateString()}</p>
    </div>
  );
}

export default IdCard;
