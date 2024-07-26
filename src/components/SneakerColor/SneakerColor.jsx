import { useState } from "react";
import "./SneakerColor.css";

export function SneakerColor() {
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="sneaker-color">
      <h1>Cor:</h1>
      <div className="color-button-div">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-button ${
              selectedColor === color ? "selected" : ""
            }`}
            onClick={() => handleColorClick(color)}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </div>
  );
}
