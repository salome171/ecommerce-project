import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Pages/Main'
import Signin from './Pages/Signin'
import CreateAccount from './Components/Footer/CreateAccount'
import Items from './Pages/Items'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Main />} />
          <Route path='/signing' element={<Signin />} />
          <Route path='/createAccount' element={<CreateAccount />} />
          <Route path='/:id' element={<Items />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
