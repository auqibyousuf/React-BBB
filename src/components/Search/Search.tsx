import { ImSearch } from "react-icons/im";
import { ButtonType } from "../../types/Button.types";

const Search = ({ btnText, variant, extraClasses }: ButtonType) => {
  return (
    <button className={`btn-search ${extraClasses} ${variant}`}>
      {" "}
      <ImSearch /> {btnText}
    </button>
  );
};

export default Search;
