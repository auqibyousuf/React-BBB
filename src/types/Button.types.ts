import { IconType } from "react-icons";

export type ButtonType = {
  btnText?: string;
  variant: "primary"|'secondary'|'tertiary';
  rightIcon?:IconType;
  extraClasses?: string,
};
