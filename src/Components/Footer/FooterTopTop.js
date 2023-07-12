import { styled } from "styled-components"

const FooterTopTopStyle = styled.div`
width: 100%;
height: 10%;
color: white;
background-color: #37475a;
display: flex;
align-items: center;
justify-content: center;
`

const FooterTopTop = () => {
  return(
    <FooterTopTopStyle>
      <button>Back to Top</button>
    </FooterTopTopStyle>
  )
}

export default  FooterTopTop;