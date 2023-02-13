import classNames from "classnames";
import { IconType } from "react-icons";
import { ButtonType } from "../../types/Button.types";


const Button = ({ btnText, variant,rightIcon,  extraClasses }: ButtonType) => {

const buttonClasses = classNames('flex',{'primary flex':variant=='primary','secondary': variant=='secondary'},extraClasses)
const iconClasses = classNames('text-red-100')
const IconType = rightIcon as IconType
  return (
    <button className={buttonClasses}>
      {btnText}
      <IconType className={iconClasses} />
    </button>
  );
};

export default Button;
