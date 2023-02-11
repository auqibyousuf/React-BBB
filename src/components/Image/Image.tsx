import React from "react";
import { ImageTypes } from "../../types/image.types";
const Image = ({imgUrl, altText, extraClasses}:ImageTypes) => {
  return (
    <>
        <img src={imgUrl} alt={altText} className={extraClasses} />
    </>
  );
}

export default Image;

