import { FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'
import GeorgianFlag from '../../Assets/Wikipedia-Flags-GE-Georgia-Flag.512.png'
import EnglishIcon from '../../Assets/usaicon.png'

const Languages = () => {
  const [language, setLanguage] = useState('English')
  const [icon, setIcon] = useState(EnglishIcon)

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value
    setLanguage(selectedLanguage)

    if (selectedLanguage === 'Georgian') {
      setIcon(GeorgianFlag)
    } else {
      setIcon(EnglishIcon)
    }
  }

  return (

    <div className='dropdown'>

      <button className='dropdowntext dropdownhover languagesbottom'>
        <img className='usicon' src={icon} alt={language} />
        <p className='boldp'>{language}</p>
        <div>
          <FaCaretDown />
        </div>
      </button>

      <div className='dropdown-content'>
        <p>Change Language</p>
        Georgian <input type='radio' value='Georgian' name='language' onClick={handleLanguageChange} /><br />
        English <input type='radio' value='English' name='language' onClick={handleLanguageChange} /><br />
      </div>
    </div>
  )
}

export default Languages
