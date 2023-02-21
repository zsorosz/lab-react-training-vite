import React from "react";

function NumbersTable({ limit }) {
  const numArr = [];
  for (let i = 1; i <= limit; i++) {
    numArr.push(i);
  }
  const ctnStyle = {
    display: "flex",
  };
  const numStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  };
  const whiteBg = {
    backgroundColor: "red",
    width: "100px",
    height: "100px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={ctnStyle}>
      {numArr.map((num, i) => (
        <div style={i % 2 === 0 ? numStyle : whiteBg}>{num}</div>
      ))}
    </div>
  );
}

export default NumbersTable;
