import { styled } from 'styled-components'
import Navbarul from './Navbarul'
import GreatDeals from './GreatDeals'
import OffCanvasMenu from '../OffCanvasMenu'

const Navbarstyle = styled.header`
width: 100%;
height: 7vh;
color: white;
background-color: #232f3e;
display: flex;
`
const Navbar = () => {
  return (
    <Navbarstyle>
      <OffCanvasMenu />
      <Navbarul />
      <GreatDeals />
    </Navbarstyle>
  )
}

export default Navbar
