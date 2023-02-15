import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GoChevronDown } from "react-icons/go";
import { LinkTypes } from "../../types/Link.types";
import Menu from "./Menu";

export default {
  title: "BBB/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;
const links = [
  {
    linkText: "Link1",
    linkUrl: "https:www.google.com",
    extraClasses: "class",
    variant: "header-menu",
    rightIcon: GoChevronDown,
  },
  {
    linkText: "Link2",
    linkUrl: "https:www.google.com",
    extraClasses: "class",
    variant: "header-menu",
    rightIcon: GoChevronDown,
  },
  {
    linkText: "Link3",
    linkUrl: "https:www.google.com",
    extraClasses: "class",
    variant: "header-menu",
    rightIcon: GoChevronDown,
  },
] as LinkTypes[];

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const MenuLink = Template.bind({});
MenuLink.args = {
  links: links,
  variant: "header",
};
