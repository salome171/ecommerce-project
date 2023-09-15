import { useEffect, useState } from 'react'
import '../../App.css'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import All from './All'

const Input = () => {
  const [search, setSearch] = useState('')
  const [datas, setDatas] = useState({
    Isloading: true,
    IsLoaded: false,
    Iserror: false,
    data: []
  })

  const [filteredData, setFilteredData] = useState([])
  // const usecontect = createContext(defaulvalue)

  const fetchLink = 'https://fakestoreapiserver.reactbd.com/amazonproducts'

  const Fetcheddata = async () => {
    try {
      const response = await fetch(fetchLink)
      const data = await response.json()
      setDatas({
        Isloading: false,
        IsLoaded: true,
        Iserror: false,
        data
      })
    } catch (error) {
      setDatas({
        Isloading: false,
        IsLoaded: false,
        Iserror: true,
        data: []
      })
    }
  }

  useEffect(() => {
    Fetcheddata()
  }, [])

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)
    const filtered = datas.data.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase())
    })

    setFilteredData(filtered)
  }

  const handleSubmit = (event) => {
    event.preventDefault(`${event.target}`)
  }

  const push = useNavigate()

  const handlenavigate = (item) => {
    push(`/${item.id}`)
  }

  return (
    <>
      <All />
      <div className='mainsearchcontainer'>
        <form onSubmit={handleSubmit} style={{ display: 'flex', height: '100%', width: '100%' }}>
          <input
            className='headerinput'
            type='text'
            placeholder='Search Amazon'
            name='searchAmazon'
            value={search}
            onChange={handleSearch}

          />

          {search !== '' && (
            <div className='resultofinput'>
              {filteredData.map((item) => {
                const { id, title } = item
                console.log(item)
                console.log(id)
                console.log(item.id)

                return (
                  <p onClick={() => handlenavigate(item)} key={id}>
                    {title}
                  </p>
                )
              })}
            </div>
          )}

          <div className='searchIconheader'>
            <button>
              <FaSearch style={{ color: 'black', fontSize: '20px' }} />
            </button>
          </div>
        </form>
      </div>

    </>

  )
}

export default Input
