import { useState } from 'react'
import '../../App.css'
import { FaSearch } from 'react-icons/fa'

const Input = () => {
  const [search, setSearch] = useState('')
  const [datas, setDatas] = useState({
    Isloading: false,
    IsLoaded: false,
    Iserror: false,
    data: null
  })
  // const [searchContainer, setsearchContainer] = useState([])

  const fetchLink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

  const handleSearch = async (e) => {
    const { value } = e.target
    setSearch(value)

    setDatas({
      Isloading: true,
      IsLoaded: false,
      Iserror: false,
      data: null
    })

    const response = await fetch(fetchLink + value)
    const data = await response.json()
    const { drinks } = data
    console.log(drinks)

    setDatas({
      Isloading: false,
      IsLoaded: true,
      Iserror: false,
      data: drinks
    })
  }

  // const handleClick = () => {

  // }

  return (
    <div className='mainsearchcontainer'>

      <form style={{ display: 'flex', height: '100%', width: '100%' }}>
        <input className='headerinput' type='text' placeholder='Search Amazon' name='searchAmazon' value={search} onChange={handleSearch} />

        <div className='searchIconheader'>
          <button><FaSearch style={{ color: 'black', fontSize: '20px' }} /></button>
        </div>
      </form>

      {/* <div className='inputresults'> */}
      {datas.data && search !== '' &&
        <div className='resultofinput'>
          {datas.data.map((e) => (

            <p onClick={(e) => console.log(e.target.textContent)} key={e.idDrink}>
              {e.strDrink}
            </p>

          ))}
        </div>}
      {/* </div> */}
    </div>

  )
}

export default Input
