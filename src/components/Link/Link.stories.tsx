import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GoChevronDown } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import Link from "./Link";

export default {
  title: "BBB/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Menu = Template.bind({});
Menu.args = {
  linkText: "Link",
  linkUrl: "https:www.google.com",
  extraClasses: "class",
  variant: "menu",
  rightIcon: GoChevronDown,
};

export const Login = Template.bind({});
Login.args = {
  linkText: "Link",
  linkUrl: "https:www.google.com",
  extraClasses: "class",
  variant: "menu",
  leftIcon: AiOutlineUser,
};
