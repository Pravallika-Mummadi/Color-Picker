import React, { useState } from "react";
function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Your Selected Color is : {color}</p>
      </div>
      <label>Select a Color here:</label>
      <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
  );
}

export default ColorPicker;
