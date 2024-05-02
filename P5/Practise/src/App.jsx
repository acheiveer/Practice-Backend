import { useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() { 
    const [Incometax,useIncometax] = useState(20000)

 useEffect(()=>{
    setTimeout(()=>{
      document.getElementById("IncometaxConatiner").innerHTML=10;
      },5000)
 },[])

 return <>
    hio there , your income tax return are <div id="IncometaxConatiner">{Incometax}</div>
 </>
}


export default App
