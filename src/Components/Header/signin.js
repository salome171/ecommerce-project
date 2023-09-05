import { FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { styled } from 'styled-components'

const Signin = () => {
  return (

    <div className='dropdownsignin'>

      <Link to='/signing' className='dropdownhover dropdownpad'>
        <div id='myParagraph'>Hallo, sign in <br />Accounts & Lists</div>
        <div className='iconsignin'><FaCaretDown /></div>
      </Link>

      <div className='dropdown-content signin'>
        <div className='signinbutton'>
          <button>Sign in</button>
        </div>
        <div className='newcustomer'>
          <p>new customer? <a className='newcostomerblue' href='#'>start here</a></p>
        </div>
        <hr className='hr1' />

        <div className='accountandlists'>

          <div className='accountandlistsleft'>
            <h2 className='accountandlistslefth'>Your Lists</h2>
            <ul className='signingpsmal'>
              <li><a href='#'>Create a List</a></li>
              <li><a href='#'>Find a list or Registry</a></li>
            </ul>
          </div>
          <hr className='hr2' />
          <div className='rightside'>
            <h2 className='accountandlistslefth'>Your Account</h2>
            <ul className='signingpsmal'>
              <li><a href='#'>Account</a></li>
              <li><a href='#'>Orders</a></li>
              <li><a href='#'>Account</a></li>
              <li><a href='#'>Orders</a></li>
              <li><a href='#'>Account</a></li>
              <li><a href='#'>Orders</a></li>
              <li><a href='#'>Account</a></li>
              <li><a href='#'>Orders</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Signin
