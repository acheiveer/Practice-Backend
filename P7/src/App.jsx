import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import './App.css'
import {Dashboard} from "./components/Dashboard"
import {Landing} from "./components/Landing"

function App() {
  
 

  return (
  <div>
   
  <BrowserRouter>
  <Appbar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Landing/>}/>

    </Routes>    
    </BrowserRouter>

  </div>
    
    
  )
}


function Appbar(){
  const navigate = useNavigate();
  return <div>
     <div>
   <button onClick={()=>{
    // window.location.href= "/"      // this window.location.href is not the right way it does not do client side routing it actually refersh the page it reload the page 
    navigate("/")
   }}>Landing Page</button>
     
    <button onClick={()=>{
      //  window.location.href= "/dashboard"
      navigate("/dashboard ")
   }}>Dashboard Page</button>
  </div>
  </div>

}

export default App
