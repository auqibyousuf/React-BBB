import { HeadingTypes } from "../../types/Heading.types";
import cn from "classnames";

export const Heading = ({
  headingType,
  headingText,
  extraClasses,
  variant,
}: HeadingTypes) => {
  const DynamicTag = `h${headingType}` as keyof JSX.IntrinsicElements;
  const headingClasses = cn(
    "",
    {
      "lg:text-9xl lg:leading-22 sm:text-6xl sm:leading-16 xs:text-4xl sm:leading-10":
        variant == "display-1",
      "lg-text-[3.5rem] lg:leading-16 md:text-5xl md:leading-[3.5rem] sm:text-[2.5rem] sm:leading-12 text-[2rem] leading-10 font-semibold":
        variant == "display-2",
      "lg:text-[2.75rem] lg:leading-[3.5rem] sm:text-[2.5rem] sm:leading-12 text-[1.75rem] leading-8":
        variant == "display-3",
      "lg:text-4xl lg:leading-11 sm:text-[32px] sm:leading-10 text-2xl leading-7":
        variant == "headline-1",
      "text-[22px] leading-7 sm:text2xl sm:leading-7 lg:text-[28px] lg:leading-8":
        variant == "headline-2",
      "lg:text-2xl lg:leading-7 sm:text-[1.375rem] sm:leading-6 text-xl leading-6":
        variant == "headline-3",
      "lg:text-xl lg:leading-7 text-lg leading-6 ": variant == "headline-4",
      "lg:text-lg ls:leading-6 text-base leading-5": variant == "headline-5",
    },
    extraClasses
  );
  return <DynamicTag className={headingClasses}> {headingText}</DynamicTag>;
};
