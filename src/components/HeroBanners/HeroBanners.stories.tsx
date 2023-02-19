import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GoChevronDown } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { HeroBanners } from "./HeroBanners";

export default {
  title: "BBB/HeroBanners",
  component: HeroBanners,
} as ComponentMeta<typeof HeroBanners>;

const Template: ComponentStory<typeof HeroBanners> = (args) => (
  <HeroBanners {...args} />
);

export const HeroBannerwithButtonImageLeft = Template.bind({});
HeroBannerwithButtonImageLeft.args = {
  imageAlignment: "image-left",
  headingText: "Heading",
  bodyText: "This is body",
  headingVariant: "display2",
  headingType: "h2",
  paragraphVariant: "body-l",
  btn1Variant: "primary-default",
  btn2Variant: "secondary-default",
  btnText: "Learn More",
  btn2Text: "",
  imageUrl: "https://via.placeholder.com/600/24f355",
  extraClasses: "",
  variant: "image text with button",
};
export const HeroBannerwithTwoButtonsImageLeft = Template.bind({});
HeroBannerwithTwoButtonsImageLeft.args = {
  imageAlignment: "image-left",
  headingText: "Heading",
  bodyText: "This is body",
  headingVariant: "display2",
  headingType: "h2",
  paragraphVariant: "body-l",
  btn1Variant: "primary-default",
  btn2Variant: "secondary-default",
  btnText: "Learn More",
  btn2Text: "Learn More",
  imageUrl: "https://via.placeholder.com/600/24f355",
  extraClasses: "",
  variant: "image text with two buttons",
};
