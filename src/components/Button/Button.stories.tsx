import React from "react";
import { ImSearch } from "react-icons/im";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "BBB/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnText: "Button",
  variant: "primary",
};

export const Search = Template.bind({});
Search.args = {
  btnText: "",
  variant: "search",
  rightIcon: ImSearch,
};
