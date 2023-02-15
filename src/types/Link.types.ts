import { IconType } from "react-icons";

export type LinkTypes = {
  linkUrl: string;
  linkText: string;
  target?: string;
  rightIcon?: IconType;
  leftIcon?: IconType;
  socialIcon?: IconType;
  variant: "header-menu" | "menu-left-icon" | "footer-menu" | "social-icon";
  extraClasses?: string;
};
