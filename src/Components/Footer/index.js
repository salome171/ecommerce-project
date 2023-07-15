import { styled } from 'styled-components'
import FooterBottom from './FooterBottom'
import FooterTop from './Footertop'
import FooterTopBottom from './Footertopbottom'
import FooterTopTop from './FooterTopTop'
import FooterBottomEnd from './FooterBottomEnd'

const Headerstyle = styled.div`
width: 100%;
height: 150vh;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Footer = () => {
  return (
    <Headerstyle>
      <FooterTopTop />
      <FooterTop />
      <FooterTopBottom />
      <FooterBottom />
      <FooterBottomEnd />
    </Headerstyle>
  )
}

export default Footer
