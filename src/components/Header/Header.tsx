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

function Header() {
  const links = [
    {
      linkText: "Finance options",
      linkUrl: "#",
      extraClasses: "class",
      variant: "menu",
      rightIcon: GoChevronDown,
    },
    {
      linkText: "Business guidance",
      linkUrl: "#",
      extraClasses: "class",
      variant: "menu",
      rightIcon: GoChevronDown,
    },
    {
      linkText: "Our partners",
      linkUrl: "#",
      extraClasses: "class",
      variant: "menu",
      rightIcon: GoChevronDown,
    },
    {
      linkText: "News and events",
      linkUrl: "#",
      extraClasses: "class",
      variant: "menu",
      rightIcon: GoChevronDown,
    },
    {
      linkText: "About",
      linkUrl: "#",
      extraClasses: "class",
      variant: "menu",
      rightIcon: GoChevronDown,
    },
  ] as LinkTypes[];

  const headerClasses = classNames(
    "flex justify-between px-24 w-full mx-auto relative xs:items-center xs:px-4 sm:px-8 "
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={headerClasses}>
      <a href="/">
        <Image
          imgUrl={require("../../assets/images/logo.png")}
          altText=""
          extraClasses="my-7 object-contain"
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
            rightIcon={ImSearch}
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
    </header>
  );
}
export default Header;
