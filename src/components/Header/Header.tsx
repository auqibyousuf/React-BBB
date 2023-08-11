import Image from "../Image/Image";
import Button from "../Button/Button";
import { ImSearch } from "react-icons/im";
import { GoChevronDown } from "react-icons/go";
import Menu from "../Menu/Menu";
import { LinkTypes } from "../../types/Link.types";
import classNames from "classnames";
import Link from "../Link/Link";
import { AiOutlineUser } from "react-icons/ai";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";
import { Heading } from "../Heading/Heading";

function Header() {
  const links = [
    {
      linkText: "Finance options",
      linkUrl: "#",
      variant: "header-menu",
      rightIcon: GoChevronDown,
    },
    {
      linkText: "Business guidance",
      linkUrl: "#",
      variant: "header-menu",
      rightIcon: GoChevronDown,
    },
    {
      linkText: "Our partners",
      linkUrl: "#",
      variant: "header-menu",
      rightIcon: GoChevronDown,
    },
    {
      linkText: "News and events",
      linkUrl: "#",
      variant: "header-menu",
      rightIcon: GoChevronDown,
    },
    {
      linkText: "About",
      linkUrl: "#",
      variant: "header-menu",
      rightIcon: GoChevronDown,
    },
  ] as LinkTypes[];

  const headerClasses = classNames(
    "flex justify-between lg:px-0 w-full mx-auto relative xs:items-center px-4 sm:px-8 "
  );

  const searchContainer = classNames(
    "xs:hidden lg:h-[256px] sm:h-[232px] bg-background-neutral-medium  xs:px-4 xs:pt-8 xs:pb-[42px] sm:pb-0 sm:px-0 sm:pt-0 sm:flex items-center justify-center xs:block"
  );
  const searchFormContainerClasses = classNames("flex flex-col  ");
  //Menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Search Bar
  const [isSearchOpen, setisSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const clickSearch = () => {
    setisSearchOpen(!isSearchOpen);
  };

  return (
    <header className="max-w-8xl mx-auto w-full fixed md:static z-20 bg-white">
      <div className={headerClasses}>
        <a href="/">
          <Image
            imgUrl={require("../../assets/images/logo.png")}
            altText=""
            extraClasses="my-7 object-contain xs:w-[107px] lg:w-auto"
          />
        </a>
        <div className="flex flex-col items-end">
          <Link
            linkText="Log in"
            linkUrl=""
            leftIcon={AiOutlineUser}
            variant="menu-left-icon"
            extraClasses="xs:hidden md:flex"
          />
          <div className="flex flex-row">
            <Menu
              links={links}
              variant="header"
              extraClasses={!isMenuOpen ? "hidden md:flex" : "md:flex"}
            />
            <Button
              btnText=""
              variant="search"
              extraClasses="xs:hidden md:flex"
              rightIcon={isSearchOpen ? CgClose : ImSearch}
              clickEvents={clickSearch}
            />
          </div>
        </div>
        <div className="flex flex-row md:hidden">
          {isMenuOpen ? (
            <ImSearch className="w-8 h-8" />
          ) : (
            <ImSearch className="xs:hidden" />
          )}
          {isMenuOpen ? (
            <CgClose onClick={toggleMenu} className="w-8 h-8 ml-8" />
          ) : (
            <CgMenu onClick={toggleMenu} className="w-8 h-8 " />
          )}
        </div>
      </div>
      <div className={isSearchOpen ? searchContainer : "hidden"}>
        <div className={searchFormContainerClasses}>
          <Heading
            headingText="Search British Business Bank"
            variant="headline-2"
            headingType="2"
            extraClasses="lg:mb-[22px] sm:mb-[18px] mb-[14px]"
          ></Heading>
          <div className="flex">
            <form>
              <input
                type="search"
                placeholder="Search..."
                className="lg:w-[534px] md:w-[384px] pl-[10px] outline-none sm:w-[371px] border border-solid border-border-input-default mr-[10px] focus:border-2 focus:border-solid focus:border-background-interactive-default text-[18px] spacing-5"
              />
              <Button
                variant="search"
                extraClasses="flex"
                rightIcon={ImSearch}
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
