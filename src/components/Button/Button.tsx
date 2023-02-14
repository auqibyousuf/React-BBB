import classNames from "classnames";
import { IconType } from "react-icons";
import { ButtonType } from "../../types/Button.types";

const Button = ({ btnText, variant, rightIcon, extraClasses }: ButtonType) => {
  const buttonClasses = classNames(
    {
      "primary flex": variant == "primary",
      secondary: variant == "secondary",
      "search bg-background-interactive-default px-4 pt-3 pb-5  ml-[1.875rem] group hover:bg-background-neutral-medium hover:cursor-pointer hover:after:border-solid hover:after:border-b-[.375rem] hover:after:border-b-background-interactive-default relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full":
        variant == "search",
    },
    extraClasses
  );
  const iconClasses = classNames({
    "text-white w-6 h-6 group-hover:text-icon-interactive-hover ":
      variant == "search",
  });
  const IconType = rightIcon as IconType;
  return (
    <button className={buttonClasses}>
      {btnText}
      {rightIcon && <IconType className={iconClasses} />}
    </button>
  );
};

export default Button;
