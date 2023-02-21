import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);
  const divStyle = {
    width: "100px",
    height: "100px",
    border: "2px solid black",
  };
  return (
    <div>
      <div style={divStyle}></div>R:
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(event) => {
          setRValue(event.target.value);
          console.log(rValue);
        }}
      />
      <div style={divStyle}></div>G:
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(event) => {
          setGValue(event.target.value);
        }}
      />
      <div style={divStyle}></div>B:
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(event) => {
          setBValue(event.target.value);
        }}
      />
      <div style={divStyle}></div>RGB:({rValue},{gValue},{bValue})
    </div>
  );
}

export default RGBColorPicker;
