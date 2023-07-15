import { styled } from 'styled-components'
import usaicon from '../../Assets/usaicon.png'
import { FaGlobe, FaSort } from 'react-icons/fa'
import logo from '../../Assets/amazonlogo.png'

const FooterTopBottomstyle = styled.div`
width: 100%;
height: 20%;
color: white;
background-color: #232f3e;
display: flex;
align-items: center;
justify-content: center;
border-top: 1px solid grey;
gap: 5px
`

const FooterTopBottom = () => {
  return (
    <FooterTopBottomstyle>

      <div className='hoverforbottom'><a href='#'><img src={logo} alt='logo' /></a></div>

      <div className='FooterTopBottomstyleButton'>
        <button style={{ display: 'flex', alignItems: 'center' }}>
          <div className='usicon'><FaGlobe /></div>
          <p>English</p>
          <div className='usicon'><FaSort /></div>
        </button>
      </div>

      <div className='FooterTopBottomstyleButton'><button>$ USD - U.S Dollar</button></div>

      <div className='FooterTopBottomstyleButton'>
        <button style={{ display: 'flex', alignItems: 'center' }}>
          <img className='usicon' src={usaicon} />
          <p>United States</p>
        </button>
      </div>
    </FooterTopBottomstyle>
  )
}

export default FooterTopBottom
