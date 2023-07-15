import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { styled } from 'styled-components'

const Allstyle = styled.div`
display: flex;
justify-content: center;
`
const All = () => {
  const [open, setopen] = useState(false)

  const handleclick = () => {
    setopen(!open)
  }
  return (
    <div className='dropdowncont'>
      <Allstyle>
        <button className='dropdowntext' onClick={handleclick}><p className='allpccol'>All</p>
          <div className='dropdownicon'><FaCaretDown /></div>
        </button>
      </Allstyle>

      <div className={`Dropdown-menu ${open ? '' : 'inactive'}`}>
        <div className='allscroll'>
          <DropdownItem text='my profile' />
          <DropdownItem text='your profile' />
          <DropdownItem text='your profile' />
          <DropdownItem text='your profile' />
          <DropdownItem text='your profile' />
          <DropdownItem text='your profile' />
          <DropdownItem text='your profile' />
          <DropdownItem text='your profile' />
          <DropdownItem text='your profile' />
          <DropdownItem text='your profile' />
          <DropdownItem text='your profile' />
        </div>
      </div>
    </div>
  )
}

function DropdownItem (props) {
  return (
    <li className='dropdownitem'>
      <a>{props.text}</a>
    </li>
  )
}

export default All
