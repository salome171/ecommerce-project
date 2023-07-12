import { Link } from "react-router-dom";
import { styled } from "styled-components"

const FooterTopStyle = styled.div`
width: 100%;
height: 50%;
color: white;
background-color: #232f3e;
display: flex;
align-items: center;
justify-content: center;
`

const arr = [
  {link: "/", title: "Careers"},
  {link: "/", title: "Blog"},
  {link: "/", title: "About Amazon"},
  {link: "/", title: "Investor Relations"},
  {link: "/", title: "Amazon Devices"},
  {link: "/", title: "Amazon Devices"},
]

const FooterTop = () => {
  return(
    <FooterTopStyle>
      <div className="footertop">

        <div className="footertoppart">
          <p className="footertoppartp">Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footertoppart">
          <p className="footertoppartp">Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footertoppart">
          <p className="footertoppartp">Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footertoppart">
          <p className="footertoppartp">Get to Know Us</p>
          <ul>
            {arr.slice(0, 5).map((element, index) => (
              <li key={index}><Link to={element.link}>{element.title}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </FooterTopStyle>
      
  )
}

export default  FooterTop;