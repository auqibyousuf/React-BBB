import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Cards } from "./Cards";

export default {
  title: "BBB/Cards",
  component: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Default = Template.bind({});
Default.args = {};
