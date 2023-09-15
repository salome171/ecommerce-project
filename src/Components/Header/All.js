import React, { useEffect, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { styled } from 'styled-components'

const Allstyle = styled.div`
display: flex;
justify-content: center;
`
const All = () => {
  const [open, setopen] = useState(false)
  const [datas, setDatas] = useState({
    Isloading: true,
    IsLoaded: false,
    Iserror: false,
    data: []
  })
  const [categories, setCategories] = useState('All')

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

  const handleclick = () => {
    setopen(!open)
  }

  const handleCategory = (e) => {
    const category = e.target.textContent
    setCategories(category)
  }

  const uniqueCategories = [...new Set(datas.data.map((el) => el.category))]
  console.log(uniqueCategories)
  const categoryList = uniqueCategories.map((category) => (
    <div key={category}>{category}</div>
  ))

  return (
    <div className='dropdowncont'>
      <Allstyle>
        <button className='dropdowntext' onClick={handleclick}><p className='allpccol'>{categories}</p>
          <div className='dropdownicon'><FaCaretDown /></div>
        </button>
      </Allstyle>

      <div className={`Dropdown-menu ${open ? '' : 'inactive'}`}>
        <div className='allscroll' onClick={(e) => handleCategory(e)}>
          {categoryList}
        </div>
      </div>
    </div>
  )
}

export default All
