import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() { 
  const [exchnage1data,setExchnage1data] = useState({});
  const [exchnage2data,setExchnage2data] = useState({});
  const [bankData,setBankData] = useState({})


  useEffect(()=>{ 
        setExchnage1data({returns:100});
  },[])

  useEffect(()=>{ 
    setExchnage2data({returns:100});
},[])

 useEffect(()=>{
    setTimeout(()=>{
        setBankData({
            returns:100
        });
      })
 },[])



  const cryptoreturn = (exchnage1data.returns + exchnage2data.returns);
  const incometax = (cryptoreturn + bankData.returns) * 0.3;
   
return <>
      hi there, your income tax returns are {incometax}
 </>
}



export default App
