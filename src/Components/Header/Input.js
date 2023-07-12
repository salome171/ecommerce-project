import { styled } from "styled-components"
import '../../App.css';
import { FaSearch } from "react-icons/fa";


const Input = () => {
    return(
        <div className="inputstyle">
          <input className="headerinput" type="text" placeholder="Search Amazon"></input>
          <div className="searchIconheader"><button><FaSearch style={{color: "black", fontSize: "20px"}} /></button></div>
        </div>
    )
}

export default Input