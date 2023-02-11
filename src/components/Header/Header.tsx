import Image from "../Image/Image";
import Lists from "../List/Lists";
import Search from "../Search/Search";

function Header() {
  return (
    <header>
      <Image imgUrl="../assets/logo.png" altText="" extraClasses="" />
      <Lists />
      <Search btnText='' variant='' extraClasses='' event='' />
    </header>
  );
}
export default Header;
