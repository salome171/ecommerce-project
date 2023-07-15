import { styled } from 'styled-components'

const Greatstyle = styled.div`
width: 60%;
height: 5vh;
font-weight: bold;
display: flex;
`
const GreatDeals = () => {
  return (
    <Greatstyle>
      <button className='greatdeals '>Shop Great deals</button>
    </Greatstyle>
  )
}

export default GreatDeals
