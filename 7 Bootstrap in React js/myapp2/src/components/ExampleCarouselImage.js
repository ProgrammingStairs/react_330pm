import React from "react";

function ExampleCarouselImage({ src, text }) {
  return (
    <img
      src={src}
      alt={text}
      style={{ width: "100%", height: "400px", objectFit: "cover" }}
    />
  );
}

export default ExampleCarouselImage;
