// import './App.css'
import logo from '../../Assets/amazonblack.png'
// import { Link } from 'react-router-dom'

const CreateAccount = () => {
  return (
    <div className='signingContainer'>
      <div className='signingContainerLogo'><a href='#'><img src={logo} alt='logo' /></a></div>
      <div className='signingContainerBodyWrapper' style={{ height: '550px', justifyContent: 'flex-start' }}>
        <div className='signingContainerBody'>
          <h1 className='signingContainerBodyh1'>Create Account</h1>
          <p className='signingContainerBodyp'>Your name
          </p>
          <input className='signingContainerinput' type='text' placeholder='First and lastname' />
          <p className='signingContainerBodyp'>Mobile number or email
          </p>
          <input className='signingContainerinput' type='text' placeholder='At least 6 charachters' />
          <p className='signingContainerBodyp'>Password
          </p>
          <input className='signingContainerinput' type='text' />
          <p className='minPassword'>
            Passwords must be at least 6 characters.
          </p>
          <p className='signingContainerBodyp'>Re-enter password
          </p>
          <input className='signingContainerinput' type='text' placeholder='First and lastname' />
          <button className='signingContainerBodyButton'>Continue</button>
          <p className='termsp'>
            By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>
          <p className='termsp'>
            Already have an account? <a href='#'>Sign in</a> and <a href='#'>Privacy Notice</a>.
          </p>
          <p className='termsp'>
            Buying for work? <a href='#'>Create a free business account</a>
          </p>
        </div>
      </div>
      <div className='signingContainerBodyWrapper signingContainerBodyWrapperFooter' style={{ paddingBottom: '20px' }} />
      <div className='signingContainerBodyWrapper signingContainerBodyWrapperFooter'>
        <div className='conditionsandso'>
          <a href='#'>Conditions of use</a>
          <a href='#'>Privacy Notice</a>
          <a href='#'>Help</a>
        </div>
        <p className='lastp' style={{ paddingBottom: '20px' }}>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default CreateAccount
