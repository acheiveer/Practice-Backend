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
   <button onClick={()=>{
    window.location.href= "/"
   }}>Landing Page</button>
     
    <button onClick={()=>{
       window.location.href= "/dashboard"
   }}>Dashboard Page</button>
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
