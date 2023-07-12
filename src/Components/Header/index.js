import { styled } from "styled-components"
import Logo from "./Logo"
import Custom from "./Custom"
import Input from "./Input"
import Languages from "./Languages"
import { FaMapMarkerAlt,FaCartArrowDown
} from 'react-icons/fa';

import Signin from "./signin";
import All from "./All"

const Headerstyle = styled.div`
width: 100%;
height: 9vh;
color: white;
background-color: #131921;
display: flex;
align-items: center;
justify-content: center;
`
const Header = () => {
    return(
        <Headerstyle>
          <Logo />
          <Custom texts='deliver to georgia' icon={<FaMapMarkerAlt />}/>
          <All />
          <Input />
          <Languages />
          <Signin />
          <Custom texts="returns & Orders" className="custom-styles dropdown-content"/>
          <Custom text="Cart" iconCart= {<FaCartArrowDown />} />
        </Headerstyle>
    )
}

export default Header