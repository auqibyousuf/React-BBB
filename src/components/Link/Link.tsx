import { LinkTypes } from "../../types/Link.types";

const Link = ({ linkUrl, linkText, extraClasses }: LinkTypes) => {
  return (
    <a href={linkUrl} className={`link ${extraClasses}`}>
      {linkText}
    </a>
  );
};
export default Link;
