import classNames from "classnames";
import { IconType } from "react-icons";
import { ButtonType } from "../../types/Button.types";

const Button = ({ btnText, variant, rightIcon, extraClasses }: ButtonType) => {
  const buttonClasses = classNames(
    " button items-center font-medium font-BrHendrix flex flex-wrap-flex-row px-5 py-[14px] sm:px-6 lg:px-8 lg:py-4 lg:text-lg text-base leading-5 hover:bg-text-interactive-hover w-fit",
    {
      "bg-background-interactive-default text-white":
        variant == "primary-default",

      "bg-transparent text-background-interactive-default hover:text-white ":
        variant == "secondary-default",

      "bg-white text-text-interactive-hover sm:hover:bg-background-interactive-inverted-hover":
        variant == "primary-inverted",

      "bg-transparent text-white sm:hover:text-text-interactive-hover sm:hover:bg-background-interactive-inverted-hover":
        variant == "secondary-inverted",

      "bg-background-interactive-default lg:px-4 lg:pt-3 lg:pb-5  ml-[1.875rem] group sm:hover:bg-background-neutral-medium hover:cursor-pointer hover:after:border-solid hover:after:border-b-[.375rem] hover:after:border-b-background-interactive-default relative sm:hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full md:px-4 md:pt-3 md:pb-5":
        variant == "search",
    },
    extraClasses
  );
  const iconClasses = classNames("xs:w-fit mt-1 ml-1", {
    "text-white w-6 h-6 group-hover:text-text-interactive-hover ":
      variant == "search",
  });
  const IconType = rightIcon as IconType;
  return (
    <a className={buttonClasses}>
      {btnText}
      {rightIcon && <IconType className={iconClasses} />}
    </a>
  );
};

export default Button;
