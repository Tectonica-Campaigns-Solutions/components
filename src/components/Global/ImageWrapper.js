import React from "react";
import CTSlider from "./CTSlider";
import GlobalImage from "./GlobalImage";

export default function ImageWrapper({ image, ...props }) {
  if (Array.isArray(image) && image.length > 0) {
    return (
      <CTSlider>
        {image.map((img) => (
          <GlobalImage image={img} {...props} />
        ))}
      </CTSlider>
    );
  }

  return <GlobalImage image={image} {...props} />;
}
