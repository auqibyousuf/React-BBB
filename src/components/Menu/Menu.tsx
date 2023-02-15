import classNames from "classnames";
import { MenuTypes } from "../../types/Menu.types";
import Link from "../Link/Link";

const Menu = ({ links, variant, extraClasses }: MenuTypes) => {
  const menuClasses = classNames("flex ", {
    "space-x-4 xs:flex-col xs:absolute xs:top-40 xs:w-screen xs:left-0 xs:space-x-0 md:static md:flex-row md:w-fit":
      variant == "header",
    "xs:space-x-6 md:space-x-8 ": variant == "footer",
    "xs:flex-wrap": variant == "footer-secondary",
  });
  const listClasses = classNames({
    "lg:leading-5 md:leading-4 lg:text-base md:text-sm lg:pt-3 pb-4 lg:px-4 hover:bg-background-neutral-medium cursor-pointer xs:border-b xs:border-border-neutral-subdued xs:boder-solid md:border-none md:px-3 md:pt-3 xs:px-6 xs:py-4 text-core-primary":
      variant == "header",
    "leading-5 lg:text-base md:text-sm lg:text-lg xs:text-base mb-8 text-text-interactive-inverted-pressed":
      variant == "footer",
    "mr-6 text-white underline xs:text-xs lg:text-sm lg:leading-4 xs:mb-4 md:mb-0":
      variant == "footer-secondary",
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
