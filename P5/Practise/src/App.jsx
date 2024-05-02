import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() { 
    const [Incometax,useIncometax] = useState(20000)
    const divRef = useRef();

 useEffect(()=>{
    setTimeout(()=>{
        console.log(divRef.current)
      divRef.current.innerHTML=10;
      },5000)
 },[])

 return <>
    hio there , your income tax return are <div ref={divRef}>{Incometax}</div>
 </>
}


export default App
