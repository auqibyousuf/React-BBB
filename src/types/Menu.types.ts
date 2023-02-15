import { LinkTypes } from "./Link.types";
export type MenuTypes = {
  links: Array<LinkTypes>;
  variant?: "header" | "footer";
  extraClasses?: string;
};
