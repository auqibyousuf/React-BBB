import classNames from "classnames";
import { MenuTypes } from "../../types/Menu.types";
import Link from "../Link/Link";

const Menu = ({ links, variant, extraClasses }: MenuTypes) => {
  const menuClasses = classNames("flex ", {
    "space-x-4 xs:flex-col xs:absolute xs:top-40 xs:w-screen xs:left-0 xs:space-x-0 md:static md:flex-row md:w-fit":
      variant == "header",
  });
  const listClasses = classNames({
    "lg:pt-3 pb-4 lg:px-4 hover:bg-background-neutral-medium cursor-pointer xs:border-b xs:border-border-neutral-subdued xs:boder-solid md:border-none md:px-3 md:pt-3 xs:px-6 xs:py-4":
      variant == "header",
  });
  return (
    <nav className={extraClasses}>
      <ul className={menuClasses}>
        {links.map((link, index) => {
          return (
            <li className={listClasses} key={index}>
              <Link
                linkText={link.linkText}
                linkUrl={link.linkUrl}
                variant={link.variant}
                rightIcon={link.rightIcon}
                target={link.target}
                extraClasses=""
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
