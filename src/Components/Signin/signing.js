import './style.css'
import logo from '../../Assets/amazonblack.png'
// import { Link } from 'react-router-dom'

const SigninPage = () => {
  return (
    <div className='signingContainer'>
      <div className='signingContainerLogo'><a href='#'><img src={logo} alt='logo' /></a></div>
      <div className='signingContainerBodyWrapper'>
        <div className='signingContainerBody'>
          <h1 className='signingContainerBodyh1'>Sign In</h1>
          <p className='signingContainerBodyp'>Email or mobile phone number</p>
          <input className='signingContainerinput' type='text' />
          <button className='signingContainerBodyButton'>Continue</button>
          <p className='termsp'>By continuing, you agree to Amazon's <a href='#'>Conditions of Use</a> and <a href='#'>Privacy Notice</a>.</p>
          <p className='needhelp'>Need help?</p>
        </div>
      </div>
      <div className='signingContainerBodyWrapper signingContainerBodyWrapperFooter'>

        <p className='signingContainerfooterp'>New to Amazon?</p>
        <button className='signingContainerBodyButton signingContainerBodyButtontwo'>Create Your Amazon Account</button>
      </div>
      <div className='signingContainerBodyWrapper signingContainerBodyWrapperFooter'>
        <div className='conditionsandso'>
          <a href='#'>Conditions of use</a>
          <a href='#'>Privacy Notice</a>
          <a href='#'>Help</a>
        </div>
        <p className='lastp'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default SigninPage
