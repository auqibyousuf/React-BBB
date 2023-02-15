import { IconType } from "react-icons";

export type LinkTypes = {
  linkUrl: string;
  linkText: string;
  target?: string;
  rightIcon?: IconType;
  leftIcon?: IconType;
  variant: "menu" | "menu-left-icon";
  extraClasses?: string;
};
