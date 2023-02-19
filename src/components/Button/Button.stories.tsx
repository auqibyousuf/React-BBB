import React from "react";
import { ImSearch } from "react-icons/im";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { MdArrowForwardIos } from "react-icons/md";

export default {
  title: "BBB/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  btnText: "Button",
  variant: "primary-default",
  rightIcon: MdArrowForwardIos,
};
export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  btnText: "Button",
  variant: "secondary-default",
  rightIcon: MdArrowForwardIos,
};
export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  btnText: "Button",
  variant: "primary-inverted",
  rightIcon: MdArrowForwardIos,
};
export const SecondaryInverted = Template.bind({});
SecondaryInverted.args = {
  btnText: "Button",
  variant: "secondary-inverted",
  rightIcon: MdArrowForwardIos,
};

export const Search = Template.bind({});
Search.args = {
  btnText: "",
  variant: "search",
  rightIcon: ImSearch,
};
