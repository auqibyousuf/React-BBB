import classNames from "classnames";
import { MenuTypes } from "../../types/Menu.types";
import Link from "../Link/Link";

const Menu = ({ links, variant }: MenuTypes) => {
  const menuClasses = classNames("flex ", {
    "space-x-4": variant == "header",
  });
  const listClasses = classNames({
    "pt-3 pb-5 px-4 hover:bg-background-neutral-medium cursor-pointer":
      variant == "header",
  });
  return (
    <nav>
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
                extraClasses={link.extraClasses}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
