import { useState } from "react"

function App() {
  const [count,setCount] = useState(0)

  return (
    <div>
    <Count count={count} setCount={setCount}/>
    </div>
  )
}
function Count({count,setCount}){
  return <div>
   {count}<br/>
   <Buttons count={count} setCount={setCount}/>
  </div>

}
function Buttons({count ,setCount}){
  return <>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </>

}

export default App
