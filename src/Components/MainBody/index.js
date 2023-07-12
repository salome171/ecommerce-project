import { styled } from "styled-components"
import FirstSection from "./FirstSection"

const Headerstyle = styled.div`
width: 100%;
height: auto;
color: white;
/* background-color: red; */
display: flex;
align-items: center;
justify-content: center;
color: black;
`
const MainBody = () => {
    return(
        <Headerstyle>  
          <FirstSection /> 
        </Headerstyle>
    )
}

export default MainBody