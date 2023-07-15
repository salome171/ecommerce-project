import { styled } from 'styled-components'

const Custom = ({ text, icon, iconCart, texts, style }) => {
  const Customstyle = styled.header`
  /* background-color: ${icon ? 'yellow' : 'orange'}; */
  width: 13%;
  height: 9vh;
  color: white;
  padding-left: 10px; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px; 
  line-height: 1.2;
  `
  return (
    <Customstyle>
      <div className='dropdownhover dropdowntext'>

        <div className='customicontwo'>{iconCart}</div><div className='customicon'>{icon}</div>
        {text ? <div>{text}</div> : <div className='custom-styles'>{texts}</div>}

      </div>

    </Customstyle>
  )
}

export default Custom
