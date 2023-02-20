import classNames from "classnames";
import React from "react";
import { CardTypes } from "../../types/Cards.types";
import Button from "../Button/Button";
import { Heading } from "../Heading/Heading";
import Image from "../Image/Image";
import { Paragraph } from "../Paragraph/Paragraph";

export const Cards = ({
  cardVariant,
  cardImage,
  cardBtnText,
  cardBodyText,
  cardHeadingText,
  cardHeadingVariant,
  cardHeadingElementType,
  cardBodyVariant,
  buttonType,
}: CardTypes) => {
  const cardWrapper = classNames({
    "flex flex-col bg-background-interactive-default lg:py-12 lg:px-30 sm:p-8 md:py-8 md:px-[56px] xs:py-6 xs:px-4":
      cardVariant == "newsletter",
  });
  const cardBodyWrapper = classNames({
    "flex flex-col items-center text-center": cardVariant == "newsletter",
  });
  const cardImageWrapper = classNames({});
  const headingStyles = classNames({
    "lg:my-6 sm:my-5 my-4 font-semibold text-white":
      cardVariant == "newsletter",
  });
  const paragraphStyles = classNames({
    "lg:mb-8 sm:mb-6 mb-5 text-white": cardVariant == "newsletter",
  });

  return (
    <div className={cardWrapper}>
      <div className={cardImageWrapper}>
        <Image imgUrl={cardImage} altText="" />
      </div>
      <div className={cardBodyWrapper}>
        <Heading
          headingType={cardHeadingElementType}
          headingText={cardHeadingText}
          variant={cardHeadingVariant}
          extraClasses={headingStyles}
        />
        <Paragraph
          text={cardBodyText}
          variant={cardBodyVariant}
          extraClasses={paragraphStyles}
        />
        <Button btnText={cardBtnText} variant={buttonType} />
      </div>
    </div>
  );
};
