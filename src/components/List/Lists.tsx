import React from "react";
import Link from "../Link/Link";

const Lists = () => {
  return (
    <nav className="nav">
      <ul className="flex">
        <li className="text-base">
          <Link
            linkUrl="/finance-options"
            linkText="Finance options"
            extraClasses=""
          />
        </li>
        <li className="text-base">
          <Link
            linkUrl="/business-guidance"
            linkText="Business guidance"
            extraClasses=""
          />
        </li>
        <li className="text-base">
          <Link
            linkUrl="/our-partners"
            linkText="Our partners"
            extraClasses=""
          />
        </li>
        <li className="text-base">
          <Link linkUrl="/news" linkText="News and events" extraClasses="" />
        </li>
        <li>
          <Link linkUrl="/about" linkText="About" extraClasses="" />
        </li>
      </ul>
    </nav>
  );
};
export default Lists;
