import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Tecnology from './pages/Tecnology'
import { Link } from 'react-router-dom'
import "./styles/App.scss"

function App() {

  return (
    <HashRouter> 
      <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Destination' element={<Destination/>}></Route>
      <Route path='/Crew' element={<Crew/>}></Route>
      <Route path='/Tecnology' element={<Tecnology/>}></Route>
      </Routes>
    </div>
    </HashRouter>
  )
}

export default App
