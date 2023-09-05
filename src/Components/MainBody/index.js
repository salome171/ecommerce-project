import { styled } from 'styled-components'
import FirstSection from './FirstSection'
import SliderSection from './Slider'

const Headerstyle = styled.div`
width: 100%;
height: auto;
padding-bottom: 30px;
color: white;
background-color: #e3e6e6;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: black;
`
const MainBody = () => {
  return (

    <Headerstyle>
      <FirstSection />
      <SliderSection />
    </Headerstyle>

  )
}

export default MainBody
