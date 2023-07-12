import { styled } from "styled-components"
import logo from '../../Assets/amazonlogo.png'

const Logostyle = styled.div`
width: 15%;
height: 8vh;
color: white;
margin-left: 20px;
display: flex;
padding-top: 8px
`
const Logo = () => {
    return(
        <Logostyle>
          <div className="hoverforbottom"><a href="#"><img src={logo} alt="logo"/></a></div>
        </Logostyle>
    )
}

export default Logo