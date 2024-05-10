import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Netflix from './pages/Netflix.jsx'
import Player from './pages/Player.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/' element={<Netflix/>}/>
        <Route exact path='/player' element={<Player/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


