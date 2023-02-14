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
  variant,
}: LinkTypes) => {
  const RightIcon = rightIcon as IconType;
  const LeftIcon = leftIcon as IconType;
  const linkClasses = classNames(
    "inline-flex",
    {
      "text-base leading-5 font-medium items-center text-core-primary":
        variant == "menu",
      "text-sm leading-4 font-medium text-background-interactive-default px-1 py-2 mb-6 items-start":
        variant == "menu-left-icon",
    },
    extraClasses
  );
  const iconClasses = classNames(
    {
      "text-background-interactive-default ml-1": variant == "menu",
      "text-background-interactive-default mr-1": variant == "menu-left-icon",
    },
    extraClasses
  );
  return (
    <a href={linkUrl} className={linkClasses} target={target}>
      {leftIcon && <LeftIcon className={iconClasses} />}
      {linkText}
      {rightIcon && <RightIcon className={iconClasses} />}
      <span className="sr-only">{linkText}</span>
    </a>
  );
};
export default Link;
