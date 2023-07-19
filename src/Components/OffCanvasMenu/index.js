import './style.css'
import { useState, useEffect } from 'react'
import { FaBars, FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const SUB_MENU_ARRAY = [
  [{
    id: 1,
    title: 'Submenu 1 - 1'
  }, {
    id: 2,
    title: 'Submenu 1 - 2'
  }, {
    id: 3,
    title: 'Submenu 1 - 3'
  }],

  [{
    id: 1,
    title: 'Submenu 2 - 1'
  }, {
    id: 2,
    title: 'Submenu 2 - 2'
  }, {
    id: 3,
    title: 'Submenu 2 - 3'
  }],

  [{
    id: 1,
    title: 'Submenu 3 - 1'
  }, {
    id: 2,
    title: 'Submenu 3 - 2'
  }, {
    id: 3,
    title: 'Submenu 3 - 3'
  }]
]

const iconRight = <FaChevronRight />
const iconLeft = <FaChevronLeft />

const OffCanvasMenu = () => {
  const [open, setopen] = useState(false)
  const [data, setData] = useState([])
  const [menuLevel, setMenuLevel] = useState(0)
  const [subMenuId, setSubMenuId] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums')
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  const handleclick = () => {
    setopen(!open)
  }

  const menuTranslatePosition = {
    transform: `translate(${-menuLevel * 100}%)`
  }
  // subMenuId[0], 1
  const returnMenuList = (data, menuLevel, icon) => {
    if (!data) return null
    const isSubMenu = menuLevel === 1

    return data.slice(0, 10).map((el, index) => (
      <li key={el.id}>
        <button
          className='menu-button' onClick={() => {
            setMenuLevel(isSubMenu ? 0 : 1)
            setSubMenuId(index)
          }}
        >
          <span className='button-text'>{el.title}</span>
          <div className='button-icon'>{icon}</div>
        </button>
        {/* {isSubMenu && JSON.stringify(el, null, 2)} */}
      </li>
    ))
  }

  return (
    <div className='Alldropdown dropdownhover zindex'>
      <button onClick={handleclick} className=' padallborder'>
        <div><FaBars /></div>
        <div>ALL</div>
      </button>

      <div className={`off-canvas-backdrop ${open ? 'is-open' : ''}`} onClick={handleclick} />

      <div className={`off-canvas-menu ${open ? 'is-open' : ''}`}>
        {/* transform : -100 */}
        <div style={menuTranslatePosition}>
          <h2 className='h2'>Digital Content & Devices</h2>
          <ul className='allnavbarul'>
            {returnMenuList(data, iconRight)}
          </ul>
        </div>

        {/* transform : 0 */}
        <div style={menuTranslatePosition}>
          <button onClick={() => setMenuLevel(0)}>Back{iconLeft}</button>;
          {/* <h4 className='h4'>Load submenu by id: {subMenuId}</h4>; */}
          <hr />

          <h2 className='h2'>Digital Content & Devices</h2>
          <ul className='allnavbarul'>
            {returnMenuList(SUB_MENU_ARRAY[subMenuId], 1)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OffCanvasMenu
