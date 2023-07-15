// import { styled } from 'styled-components'
import usaicon from '../../Assets/usaicon.png'
import { FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'

const Languages = () => {
  const [language, setlanguage] = useState('')

  return (

    <div className='dropdown'>
      <button className='dropdowntext dropdownhover languagesbottom'>
        <img className='usicon' src={usaicon} /><p className='boldp'>EN</p>
        <div><FaCaretDown /></div>
      </button>

      <div className='dropdown-content'>
        <p>Change Language</p>
        Georgian <input type='radio' value='Georgian' name='languager' onChange={e => setlanguage(e.target.value)} /><br />
        Spanish<input type='radio' value='Spanish' name='languager' onChange={e => setlanguage(e.target.value)} /><br />
        Chinese <input type='radio' value='Chinese' name='languager' onChange={e => setlanguage(e.target.value)} /><br />
        <p>{language}</p>
      </div>
    </div>

  )
}

export default Languages
