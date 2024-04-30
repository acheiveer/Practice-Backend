import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() { 
    const [count,setCount] = useState(0)
    const [inputval,setInputval] = useState(1)

    // var cnt =0;
    // for(let i=1;i<=inputval;i++){
    //     cnt+=i
    // }

    let cnt = useMemo(()=>{
        let cnt =0;
    for(let i=1;i<=inputval;i++){
        cnt+=i
    }
    return cnt;
    },[inputval]);
   
return <>
       <input
        onChange={(e)=>{
            setInputval(e.target.value)
        }}
        placeholder="Enter No"
      />
      <p>Sum of 1 to {inputval} is {cnt}</p>

        <button onClick={()=>{
            setCount(count +1)
        }}>Counter ({count})</button>
 </>
}



export default App
