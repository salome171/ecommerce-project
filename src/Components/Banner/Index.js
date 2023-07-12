import { styled } from "styled-components";
import SliderBar from "./slidebar";
import image1 from "../../Assets/FirstSlider/image1.jpg";
import image2 from "../../Assets/FirstSlider/image2.jpg";
import image3 from "../../Assets/FirstSlider/image3.jpg";
import image4 from "../../Assets/FirstSlider/image4.jpg";
import image5 from "../../Assets/FirstSlider/image5.jpg";

// const Headerstyle = styled.div`
// background-color: #feeeca;
// height: 800px;
// `
const slides = [
  {url: image1, title:"kitchen" },
  {url: image2, title:"kitchen1" },
  {url: image3, title:"kitchen2" },
  {url: image4, title:"kitchen3" },
  {url: image5, title:"kitchen4" }
];

const containerstyle = {
  // width: "100%",
  // height: "600px",
  // backgroundColor: "#e3e6e6",
  // cursor: "pointer",
}

const Banner = () => {
  return(
    // <Headerstyle>
      <div style={containerstyle}>
      <SliderBar slides={slides} />
      </div>
    // </Headerstyle >
  )
};

export default Banner;