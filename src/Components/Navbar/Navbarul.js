import { styled } from 'styled-components'

const Navbarulstyle = styled.header`
width: 40%;
height: 5vh;
color: white;
display: flex;

`
const Navbarul = () => {
  return (
    <Navbarulstyle>
      <div className='Alldropdown'>
        <ul className='navralul'>

          <a href='#'><li className='dropdownhover dropdowntext'>Today's deals</li></a>

          <a href='#'><li className='dropdownhover widthpad'>Customer Service</li></a>

          <a href='#'><li className='dropdownhover dropdowntext'>Registry</li></a>

          <a href='#'><li className='dropdownhover dropdowntext'>Gift Cards</li></a>

          <a href='#'><li className='dropdownhover dropdowntext'>Sell</li></a>
        </ul>
      </div>
    </Navbarulstyle>
  )
}

export default Navbarul
