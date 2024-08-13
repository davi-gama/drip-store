import { useState } from "react";
import "./SneakerSize.css";

export function SneakerSize() {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = [39, 40, 41, 42, 43];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="sneaker-size">
      <h1>Tamanho:</h1>
      {sizes.map((size) => (
        <button
          key={size}
          className={`size-button ${selectedSize === size ? "selected" : ""}`}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
