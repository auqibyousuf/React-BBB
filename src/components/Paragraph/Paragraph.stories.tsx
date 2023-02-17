import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paragraph } from "./Paragraph";
export default {
  title: "BBB/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  text: "Paragraph",
  extraClasses: "",
  variant: "body-l",
};
export const BodyMedium = Template.bind({});
BodyMedium.args = {
  text: "Paragraph",
  extraClasses: "",
  variant: "body-m",
};
export const BodySmall = Template.bind({});
BodySmall.args = {
  text: "Paragraph",
  extraClasses: "",
  variant: "body-s",
};
export const LabelLarge = Template.bind({});
LabelLarge.args = {
  text: "Paragraph",
  extraClasses: "",
  variant: "label-l",
};
export const LabelMedium = Template.bind({});
LabelMedium.args = {
  text: "Paragraph",
  extraClasses: "",
  variant: "label-m",
};
export const LabelSmall = Template.bind({});
LabelSmall.args = {
  text: "Paragraph",
  extraClasses: "",
  variant: "label-s",
};
