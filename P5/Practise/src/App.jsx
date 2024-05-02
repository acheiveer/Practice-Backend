import { useCallback, useEffect, useMemo, useState } from 'react'
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
      },5000)
 },[])

// useCallback is not about minimizing the amout of code that is run 
// useCallback is about not rendering a child component, if the function hasnot/doesnpt need to cahnge across render

 const calculateCryproReturns = useCallback(function(){
    return exchnage1data.returns + exchnage2data.returns
 },[exchnage1data,exchnage2data])
  const incometax = (calculateCryproReturns() + bankData.returns) * 0.3;
   
return <>
      <CryptoGainCalculator  calculateCryproReturns={calculateCryproReturns}/>
 </>
}

function CryptoGainCalculator({calculateCryproReturns}){
    return <div>
        your crypto returns are {calculateCryproReturns()}
    </div>
}

export default App
