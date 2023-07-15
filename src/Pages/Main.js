import Header from '.././Components/Header'
import Navbar from '.././Components/Navbar'
import Banner from '.././Components/Banner/Index'
import Footer from '../Components/Footer'
// import SliderBody from '../Components/SlidersBody'

const Main = () => {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Banner />
      {/* <SliderBody /> */}
      <Footer />
    </div>
  )
}

export default Main
