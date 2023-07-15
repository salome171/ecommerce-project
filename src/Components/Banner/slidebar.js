import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css' // Import the Font Awesome CSS
import MainBody from '../MainBody'

const SliderBar = ({ slides }) => {
  const [currentIndex, setcurrentIndex] = useState(0)
  console.log(slides.length)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setcurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setcurrentIndex(newIndex)
  }

  const sliderall = {
    height: '100%',
    width: 'auto',
    position: 'relative',
    top: '0',
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <div style={sliderall} className='main-slider-div'>
      <div className='styleslideleft'>
        <FontAwesomeIcon icon={faAngleLeft} style={{ fontSize: '40px' }} onClick={goToPrevious} />
      </div>

      <div className='sliderstyles'>
        <img src={slides[currentIndex].url} alt='sliderImg' />
      </div>

      <div className='styleslideright'>
        <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: '40px' }} onClick={goToNext} />
      </div>

      <MainBody />

    </div>
  )
}

export default SliderBar
