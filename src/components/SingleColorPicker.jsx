import React from "react";

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div>
      <input type="number" onChange={onChange} />
    </div>
  );
}

export default SingleColorPicker;
