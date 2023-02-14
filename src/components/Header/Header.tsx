import Image from "../Image/Image";
import Button from "../Button/Button";
import { ImSearch } from "react-icons/im";
import { GoChevronDown } from "react-icons/go";
import Menu from "../Menu/Menu";
import { LinkTypes } from "../../types/Link.types";
import classNames from "classnames";
import Link from "../Link/Link";
import { AiOutlineUser } from "react-icons/ai";

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
    "flex justify-between px-24 w-9/12 mx-auto "
  );
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
          extraClasses=""
        />
        <div className="flex flex-row">
          <Menu links={links} variant="header" />
          <Button
            btnText=""
            variant="search"
            extraClasses=""
            rightIcon={ImSearch}
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
