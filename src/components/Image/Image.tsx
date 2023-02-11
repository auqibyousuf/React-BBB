import { ImageTypes } from "../../types/Image.types";
const Image = ({imgUrl, altText, extraClasses}:ImageTypes) => {
  return (
    <>
        <img src={imgUrl} alt={altText} className={extraClasses} />
    </>
  );
}

export default Image;

