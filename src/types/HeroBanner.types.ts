export type HeroBanner = {
  variant: "image text with button" | "image text with two buttons";
  extraClasses?: string;
  headingText: any;
  bodyText: string;
  headingVariant: any;
  paragraphVariant: any;
  headingType: any;
  btnText: string;
  btn1Variant: any;
  btn2Variant?: any;
  btn2Text?: string;
  imageUrl: string;
  imageAlignment?: "image-left" | "image-right";
};
