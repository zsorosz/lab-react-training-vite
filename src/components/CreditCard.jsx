import React from "react";
import visa from "../assets/images/visa.png";
import masterCard from "../assets/images/master-card.svg";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardStyle = {
    color: `${color}`,
    backgroundColor: `${bgColor}`,
    width: "400px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "10px",
  };
  const logoStyle = {
    width: "80px",
    alignSelf: "flex-end",
  };
  return (
    <div style={cardStyle}>
      <img
        src={type === "Visa" ? visa : masterCard}
        alt="logo"
        style={logoStyle}
      ></img>
      <div>
        <div>***********{number.slice(12, 16)}</div>
        <div>
          <span>
            Expires {expirationMonth}/{expirationYear}
          </span>
          <span> {bank}</span>
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
