import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() { 
  const [exchnagedata,setExchnagedata] = useState({});
  const [bankData,setBankData] = useState({})
  console.log("hi therer")

  useEffect(()=>{
    setTimeout(()=>{
        setBankData({income:100})
      },3000)
  },[])

//   setTimeout(()=>{
//     setBankData({income:100})
//   },3000)

//   fetch("https://google.com",async (res)=>{
//     const json = await res.json();
//     setBankData({income:100})
//   })

 useEffect(()=>{
    setTimeout(()=>{
        setExchnagedata({
            returns:100
        });
      },1000)
 },[])

//   setTimeout(()=>{
//     setExchnagedata({
//         returns:100
//     });
//   },1000)

  const incomeTax = (bankData.income + exchnagedata.returns) * 0.3;
   
return <>
      hi there, your income tax returns are {incomeTax}
 </>
}



export default App
