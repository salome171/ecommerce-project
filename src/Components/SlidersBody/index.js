// import { styled } from 'styled-components'
import SimpleSlider from './Slider'
// import Slider from 'react-slick'

// const simplesliderstyle = styled.div`
// width: 100%;
// height: 500px;
// color: white;
// background-color: #e3e6e6;
// display: flex;
// align-items: center;
// justify-content: center;
// color: black;
// `
const SliderBody = () => {
  return (
    // <simplesliderstyle >
    <div className='simpleslider'>
      <SimpleSlider />
    </div>
    // </simplesliderstyle >
  )
}

export default SliderBody
