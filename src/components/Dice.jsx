import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [isRolling, setIsRolling] = useState(false);
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
  let randomDice;
  isRolling
    ? (randomDice = diceEmpty)
    : (randomDice = diceArr[Math.floor(Math.random() * diceArr.length)]);
  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  };
  return (
    <div>
      <img src={randomDice} alt="dice" onClick={rollDice} width="50" />
    </div>
  );
}

export default Dice;
