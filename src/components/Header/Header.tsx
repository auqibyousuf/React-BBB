import Image from "../Image/Image";
import Lists from "../List/Lists";
import Button from "../Button/Button";
import { ImSearch } from "react-icons/im";

function Header() {
  return (
    <header>
            <Image imgUrl={require('../../assets/images/logo.png')} altText="" extraClasses="" />
      <Lists />
      <Button btnText='' variant='secondary' extraClasses='auqib' rightIcon={ImSearch} />
    
    </header>
  );
}
export default Header;
