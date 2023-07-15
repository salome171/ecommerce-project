import { Link } from 'react-router-dom'

const FooterBottomEnd = () => {
  const arr = [
    { link: '/', title: 'Conditions of Use' },
    { link: '/', title: 'Privacy Notice' },
    { link: '/', title: 'Your Ads Privacy Choices' }
  ]

  return (
    <div className='footerbottomendall'>

      <ul className='footerbottomend'>
        {arr.slice(0, 1).map((element, index) => (
          <li key={index}><Link to={element.link}>{element.title}</Link></li>
        ))}
        {arr.slice(1, 2).map((element, index) => (
          <li key={index}><Link to={element.link}>{element.title}</Link></li>
        ))}
        {arr.slice(2, 3).map((element, index) => (
          <li key={index}><Link to={element.link}>{element.title}</Link></li>
        ))}
      </ul>
      <div className='footerbottomend'>© 1996-2023, Amazon.com, Inc. or its affiliates</div>
    </div>
  )
}

export default FooterBottomEnd
