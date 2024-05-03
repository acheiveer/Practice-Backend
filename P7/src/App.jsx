import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import {Dashboard} from "./components/Dashboard"
import {Landing} from "./components/Landing"

function App() {
 

  return (
  <>
  <>
    <p style={{background:"green"}}>Hello prabhakar here</p>
  </>
  <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Landing/>}/>

    </Routes>    
    </BrowserRouter>

  </>
    
    
  )
}

export default App
