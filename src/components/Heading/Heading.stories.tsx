import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";

export default {
  title: "BBB/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headingType: "3",
  headingText: "Heading",
};
