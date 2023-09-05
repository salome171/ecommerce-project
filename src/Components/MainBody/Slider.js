import { useEffect, useState } from 'react'
import './style.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// import { FaAngleLeft } from 'react-icons/fa'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const SliderSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const [data, setData] = useState({
    data: [],
    isLoading: true,
    isLoaded: false,
    isError: false
  })
  // const [picture, setPicture] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapiserver.reactbd.com/amazonproducts')
      const result = await response.json()
      setData({
        data: result,
        isLoading: false,
        isLoaded: true,
        isError: false
      })
    } catch (error) {
      setData({
        data: [],
        isLoading: false,
        isLoaded: true,
        isError: true
      })
    }
  }

  return (
    <div className='FirstSliderCont'>
      <h2>Popular products in PC internationally</h2>
      <Carousel responsive={responsive}>
        <div className='FirstSliderControw'>

          {data.isLoading
            ? (
              <p>Loading...</p>
              )
            : data.isError
              ? (
                <p>Error occurred while fetching data.</p>
                )
              : (

                  data.data.map((el) => (
                    <img key={el.id} src={el.image} alt={el.title} />

                  )

                  )
                )}

        </div>
        <div />
        <div />
        <div />

      </Carousel>
    </div>

  )
}

export default SliderSection
