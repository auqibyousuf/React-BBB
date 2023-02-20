import React from "react";
import { LinkTypes } from "../../types/Link.types";
import Menu from "../Menu/Menu";
import { MdArrowForwardIos } from "react-icons/md";
import { ImTwitter, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import Image from "../Image/Image";
import { Paragraph } from "../Paragraph/Paragraph";

export const Footer = () => {
  const footerLinks = [
    {
      linkText: "Contact us",
      linkUrl: "#",
      variant: "footer-menu",
      rightIcon: MdArrowForwardIos,
    },
    {
      linkText: "FAQ",
      linkUrl: "#",
      variant: "footer-menu",
      rightIcon: MdArrowForwardIos,
    },
    {
      linkText: "Careers",
      linkUrl: "#",
      variant: "footer-menu",
      rightIcon: MdArrowForwardIos,
    },
  ] as LinkTypes[];
  const footerSocialIcons = [
    {
      linkText: "",
      linkUrl: "www.linkedin.com/in",
      variant: "social-icon",
      rightIcon: BsLinkedin,
    },
    {
      linkText: "",
      linkUrl: "www.twitter.com",
      variant: "social-icon",
      rightIcon: ImTwitter,
    },
    {
      linkText: "",
      linkUrl: "www.youtube.com",
      variant: "social-icon",
      rightIcon: ImYoutube,
    },
  ] as LinkTypes[];
  const footerSecondaryLinks = [
    {
      linkText: "Accessibility",
      linkUrl: "#",
      variant: "footer-menu",
      rightIcon: MdArrowForwardIos,
    },
    {
      linkText: "Privacy Notice",
      linkUrl: "#",
      variant: "footer-menu",
      rightIcon: MdArrowForwardIos,
    },
    {
      linkText: "Cookie policy",
      linkUrl: "#",
      variant: "footer-menu",
      rightIcon: MdArrowForwardIos,
    },
    {
      linkText: "Modern Slavery Act Statement",
      linkUrl: "#",
      variant: "footer-menu",
      rightIcon: MdArrowForwardIos,
    },
  ] as LinkTypes[];
  return (
    <footer className="lg:px-24 md:px-14 sm:px-8 xs:px-4 bg-core-primary sm:pt-8 sm:pb-6 xs:pt-6 xs:pb-8">
      <div className="relative">
        <Menu variant="footer" links={footerLinks} />
        <Menu variant="social-icon" links={footerSocialIcons} />
        <div className="flex md:absolute md:top-0 md:right-0 xs:mt-8 md:mt-0 xs:h-10 md:h-auto">
          <Image
            imgUrl={require("../../assets/images/bbi-logo.png")}
            altText="BBI"
            extraClasses="md:mr-16 mr:12"
          />
          <Image
            imgUrl={require("../../assets/images/bpc-logo.png")}
            altText="BPC"
          />
        </div>
        <Paragraph
          variant="label-s"
          text="British Business Bank plc is a public limited company registered in England and Wales, registration number 08616013, registered office at Steel City House, West Street, Sheffield, S1 2GQ. It is a development bank wholly owned by HM Government. British Business Bank plc and its subsidiaries are not banking institutions and do not operate as such. They are not authorised or regulated by the Prudential Regulation Authority (PRA) or the Financial Conduct Authority (FCA). A complete legal structure chart for the group can be found at www.british-business-bank.co.uk"
          extraClasses="xs:text-xs lg:text-sm lg:leading-4 md:max-w-[44.1875rem] mt-8 mb-6 text-white"
        />
        <Menu variant="footer-secondary" links={footerSecondaryLinks} />
      </div>
    </footer>
  );
};
