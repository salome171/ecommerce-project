import { styled } from 'styled-components'
import FooterBottom from './FooterBottom'
import FooterTop from './Footertop'
import FooterTopBottom from './Footertopbottom'
import FooterTopTop from './FooterTopTop'
import FooterBottomEnd from './FooterBottomEnd'
import Signin from './Signin'

const Headerstyle = styled.div`
width: 100%;
height: 180vh;
/* padding-top: 10%; */
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Footer = () => {
  return (
    <Headerstyle>
      <Signin />
      <FooterTopTop />
      <FooterTop />
      <FooterTopBottom />
      <FooterBottom />
      <FooterBottomEnd />
    </Headerstyle>
  )
}

export default Footer
