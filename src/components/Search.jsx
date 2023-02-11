import { ImSearch } from "react-icons/im";

function Search({btnText}) {
  return (
    <button className='btn-search'> <ImSearch/> {btnText}</button>
  )
}

export default Search