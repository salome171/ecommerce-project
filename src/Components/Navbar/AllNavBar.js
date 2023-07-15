import { useState, useEffect } from 'react'
import { FaBars, FaChevronRight } from 'react-icons/fa'

const AllNavbar = () => {
  const [open, setopen] = useState(false)
  const [menuopen, setMenuOpen] = useState(false)
  const [data, setAlbums] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums')
      const data = await response.json()
      setAlbums(data)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  const handleclick = () => {
    setopen(!open)
  }

  return (
    <div className='Alldropdown dropdownhover zindex'>
      <button onClick={handleclick} className=' padallborder'>
        <div><FaBars /></div>
        <div>ALL</div>
      </button>

      <div className={`Dropdown-menuall ${open ? '' : 'inactiveall'}`}>
        <h2 className='h2'>Digital Content & Devices</h2>

        <ul className='allnavbarul'>
          {data.slice(0, 10).map(el => (
            <li key={el.id}>
              <button className='menu-button' onClick={() => setMenuOpen(!menuopen)}>
                <span className='button-text'>{el.title}</span>
                <div className='button-icon'><FaChevronRight /></div>
              </button>
              {menuopen ? 'hey' : ''}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default AllNavbar
