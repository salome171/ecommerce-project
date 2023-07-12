import headphone from "../../Assets/photosofirstsection/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg";
import Chair from "../../Assets/photosofirstsection/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
import Keyboard from "../../Assets/photosofirstsection/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
import Mouse from "../../Assets/photosofirstsection/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"

const slides = [
  {url: headphone, title:"headphone"},
  {url: Chair, title:"Chair"},
  {url: Keyboard, title:"Keyboard"},
  {url: Mouse, title:"Mouse"},
  {url: Mouse, title:"Mouse"},  
  {url: Mouse, title:"Mouse"}, 
  {url: Mouse, title:"Mouse"},   
];

const FirstSection = () => {
  return(
    <div className="Headerstylecontainerall">


    <div className="firstSectionacontainer">
      <h2 className="firstsectionh2">Gaming accessories</h2>
      <div className="firstsectioninall">
      {slides.slice(0,4).map((item, index) => (
          <div className="firstsectionin" key={index}>
          <img className="firstsectionimg" src={item.url} alt='sliderLogo'/>
          <p className="firstsectionp">{item.title}</p>
          </div>          
        ))}
      </div>
      <div className="sectionbutton">
      <button>see more</button>
      </div>
    </div>



    <div className="firstSectionacontainer">
      <h2 className="firstsectionh2">Gaming accessories</h2>
      <div className="firstsectioninall">
      {slides.slice(1,5).map((item, index) => (
          <div className="firstsectionin" key={index}>
          <img className="firstsectionimg" src={item.url} alt='sliderLogo'/>
          <p className="firstsectionp">{item.title}</p>
          </div>          
        ))}
      </div>
      <div className="sectionbutton">
      <button>see more</button>
      </div>
    </div>



    <div className="firstSectionacontainer">
      <h2 className="firstsectionh2">Gaming accessories</h2>
      <div className="firstsectioninall">
      {slides.slice(3,7).map((item, index) => (
          <div className="firstsectionin" key={index}>
          <img className="firstsectionimg" src={item.url} alt='sliderLogo'/>
          <p className="firstsectionp">{item.title}</p>
          </div>          
        ))}
      </div>
      <div className="sectionbutton">
      <button>see more</button>
      </div>
    </div>



    <div className="firstSectionacontainer">
      <h2 className="firstsectionh2">Gaming accessories</h2>
      <div className="firstsectioninall">
      {slides.slice(0,4).map((item, index) => (
          <div className="firstsectionin" key={index}>
          <img className="firstsectionimg" src={item.url} alt='sliderLogo'/>
          <p className="firstsectionp">{item.title}</p>
          </div>          
        ))}
      </div>
      <div className="sectionbutton">
      <button>see more</button>
      </div>
    </div>


</div>
  
  )
}
export default FirstSection;