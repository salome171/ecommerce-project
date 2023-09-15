import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '.'
import Navbar from '../Navbar'
import './index.css'

const ItemsPage = () => {
  const { id } = useParams()
  console.log(id)

  const [idi] = useState(id)
  console.log(idi)

  const [datas, setDatas] = useState({
    isLoading: true,
    iLoaded: false,
    isError: false,
    data: []
  })

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

  console.log(datas.data)

  return (
    <>
      <Header />
      <Navbar />

      <div className='itemspagecontainer'>
        {datas.data.isLoading
          ? (
            <p>Loading...</p>
            )
          : datas.data.isError
            ? (
              <p>Error loading data</p>
              )
            : (
              <div className='leftsideContainer'>
                <p>saa</p>
                {datas.data.map((item) => (
                  <div key={item.id}>
                    {idi == item.id
                      ? (
                        <>
                          <p>Title: {item.title}</p>
                          <p>{item.id}</p>
                          <img style={{ width: '200px' }} src={item.image} />
                        </>
                        )
                      : null}
                  </div>
                ))}
              </div>
              )}
        <div className='rightsideContainer' />
        <h2>Results </h2>

      </div>
    </>
  )
}

export default ItemsPage
