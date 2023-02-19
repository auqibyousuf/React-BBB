import classNames from "classnames";
import { IconType } from "react-icons";
import { LinkTypes } from "../../types/Link.types";

const Link = ({
  linkUrl,
  linkText,
  extraClasses,
  target,
  rightIcon,
  leftIcon,
  socialIcon,
  variant,
}: LinkTypes) => {
  const RightIcon = rightIcon as IconType;
  const LeftIcon = leftIcon as IconType;
  const SocialIcon = socialIcon as IconType;
  const linkClasses = classNames(
    "inline-flex items-center font-medium font-BrHendrix",
    {
      "xs:justify-between md:justify-start xs:w-full": variant == "header-menu",
      "leading-4 lg:text-base md:text-sm text-background-interactive-default px-1 py-2 mb-6 items-start hover:text-text-interactive-hover hover:underline hover:underline-offset-4 sm:text-sm":
        variant == "menu-left-icon",
      "mr-4": variant == "social-icon",
    },
    extraClasses
  );
  const iconClasses = classNames(
    "xs:w-fit mt-1 ml-1",
    {
      "text-background-interactive-default ": variant == "header-menu",
      "text-background-interactive-default mr-1": variant == "menu-left-icon",
      "xs:w-8 xs:h-8 text-white": variant == "social-icon",
    },
    extraClasses
  );
  return (
    <a href={linkUrl} className={linkClasses} target={target}>
      {leftIcon && <LeftIcon className={iconClasses} />}
      {linkText}
      {socialIcon && <SocialIcon className={iconClasses} />}
      {rightIcon && <RightIcon className={iconClasses} />}
      <span className="sr-only">{linkText}</span>
    </a>
  );
};
export default Link;
