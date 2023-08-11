import { IconType } from "react-icons";

export type ButtonType = {
  btnText?: string;
  variant:
    | "primary-default"
    | "secondary-default"
    | "primary-inverted"
    | "secondary-inverted"
    | "search";
  rightIcon?: IconType;
  extraClasses?: string;
  clickEvents?: any;
};
