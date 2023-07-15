import { useState } from 'react'
import '../../App.css'
import { FaSearch } from 'react-icons/fa'

const Input = () => {
  const [search, setSearch] = useState('')
  const [datas, setDatas] = useState({
    Isloading: false,
    IsLoaded: false,
    Iserror: false,
    data: []
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
      data: []
    })

    const response = await fetch(fetchLink + value)
    const data = await response.json()
    const { drinks } = data
    console.log(drinks)

    setDatas({
      Isloading: false,
      IsLoaded: true,
      Iserror: false,
      data: [drinks]
    })
  }

  // const handleClick = () => {

  // }

  return (
    <div className='inputstyle'>

      <form className='inputstyle'>
        <input className='headerinput' type='text' placeholder='Search Amazon' name='searchAmazon' value={search} onChange={handleSearch} />

        <div className='searchIconheader'>
          <button><FaSearch style={{ color: 'black', fontSize: '20px' }} /></button>
        </div>
      </form>

      {datas.data.map((e) => (
        <div className='resultofinput' key={e.idDrink}>{e.strDrink}</div>))}

    </div>

  )
}

export default Input
