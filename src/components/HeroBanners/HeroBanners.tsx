import classNames from "classnames";
import { HeroBanner } from "../../types/HeroBanner.types";
import Button from "../Button/Button";
import { Heading } from "../Heading/Heading";
import Image from "../Image/Image";
import { Paragraph } from "../Paragraph/Paragraph";
import { MdArrowForwardIos } from "react-icons/md";

export const HeroBanners = ({
  extraClasses,
  variant,
  imageAlignment,
  headingText,
  bodyText,
  headingVariant,
  headingType,
  paragraphVariant,
  btn1Variant,
  btn2Variant,
  btnText,
  btn2Text,
  imageUrl,
}: HeroBanner) => {
  const heroClasses = classNames(
    "flex sm:flex-row xs:flex-col-reverse justify-between",
    {
      "flex-row-reverse sm:flex-row-reverse": imageAlignment == "image-left",
      "lg:pl-24 md:pl-14 sm:pl-8 bg-core-primary text-white":
        variant == "image text with button",
      "lg:pr-37 md:pr-14 sm:pr-8 pr-4 text-image-with-two-buttons bg-background-neutral-medium items-center":
        variant == "image text with two buttons",
    },
    extraClasses
  );
  const imageClasses = classNames("", {
    "hero-image h-full xs:w-full sm:w-[372px] md:w-full xs:mb-8 sm:mb-0":
      variant == "image text with button",
    "lg:max-w-[540px] md:max-w-[375px] sm:max-w-[279px] xs:w-full":
      variant == "image text with two buttons",
  });
  const txtWrapperClasses = classNames({
    "lg:py-[260px] lg:w-[500px] md:py-[155px] md:w-[444px] sm:py-16 sm:w-[340px] xs:pl-4 sm:pl-0 xs:pb-12 sm:pb-0  sm:mt-0":
      variant == "image text with button",
    "md:py-[81px] sm:py-16 lg:py-60 xs:py-0  lg:max-w-[547px] md:max-w-[444px] sm:max-w-[340px] xs:mt-[98px] xs:px-4 sm:px-0":
      variant == "image text with two buttons",
  });
  return (
    <div className={heroClasses}>
      <div className={txtWrapperClasses}>
        <Heading
          headingText={headingText}
          headingType={headingType}
          variant={headingVariant}
          extraClasses="lg:w-[463px] md:w-[444px] sm:w-[340px] w-full"
        />
        <Paragraph
          text={bodyText}
          variant={paragraphVariant}
          extraClasses="lg:mt-6 lg:mb-12 sm:my-6 xs:mt-4 xs:mb-6"
        />
        <Button
          variant={btn1Variant}
          btnText={btnText}
          rightIcon={MdArrowForwardIos}
        />
        {btn2Text && (
          <Button
            variant={btn2Variant}
            btnText={btn2Text}
            rightIcon={MdArrowForwardIos}
          />
        )}
      </div>
      <div>
        <Image extraClasses={imageClasses} imgUrl={imageUrl} altText="" />
      </div>
    </div>
  );
};
