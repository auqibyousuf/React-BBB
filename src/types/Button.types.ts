import { IconType } from "react-icons";

export type ButtonType = {
  btnText?: string;
  variant: "primary" | "secondary" | "tertiary" | "search";
  rightIcon?: IconType;
  extraClasses?: string;
};
