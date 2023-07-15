import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const FooterBottomStyle = styled.div`
width: 100%;
height: 90%;
color: white;
background-color: #131921;
display: flex;
align-items: center;
justify-content: center;

`

const arr = [
  { link: '/', title: 'Careers' },
  { link: '/', title: 'Blog' },
  { link: '/', title: 'About Amazon' },
  { link: '/', title: 'Investor Relations' },
  { link: '/', title: 'Amazon Devices' },
  { link: '/', title: 'Amazon Devices' }
]

const FooterBottom = () => {
  return (
    <FooterBottomStyle>
      <div className='footerbottom'>

        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className='footertoppart, footerbottomp'>
          <p className='footerbottompartp'>Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </FooterBottomStyle>

  )
}

export default FooterBottom
