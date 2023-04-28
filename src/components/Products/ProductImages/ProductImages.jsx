import React, { useState } from "react";
import { Wrapper } from "./ProductImagesWrapper";

const ProductImages = ({ images }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <img src={main?.url} alt="" className="main " />
      <div className="gallery">
        {images?.map((image, index) => {
          return (
            <img
              src={image.url}
              alt="photo"
              key={index}
              className={`${image.url === main.url ? "active" : null}`}
              onClick={() => setMain(image)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
