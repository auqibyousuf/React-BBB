import classNames from "classnames";
import { ParagraphTypes } from "../../types/Paragraph.types";

export const Paragraph = ({ text, variant, extraClasses }: ParagraphTypes) => {
  const textClasses = classNames(
    {
      "lg:text-lg lg:leading-7 text-base leading-6": variant == "body-s",
      "lg:text-xl lg:leading-8 text-lg leading-7": variant == "body-m",
      "lg:text-2xl lg:leading-8 sm:text-[22px] sm:leading-8 text-xl leading-8 font-light":
        variant == "body-l",
      "lg:text-sm lg:leading-4 text-base leading-5": variant == "label-s",
      "text-base leading-5 md:text-sm md:leading-4": variant == "label-m",
      "lg:text-lg text-base leading-5 ": variant == "label-l",
    },
    extraClasses
  );
  return <p className={textClasses}>{text}</p>;
};
