import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  const [count,setCount] = useState(0)

  return (
    <div>
    <CountContext.Provider value={count}>
    <Count setCount={setCount}/>
    </CountContext.Provider>
   
    </div>
  )
}
function Count({setCount}){
  console.log("count render")
  return <div>
   <CountRenderer/>
   <Buttons setCount={setCount}/>
  </div>

}

function CountRenderer(){
  const count = useContext(CountContext);
  return <div>
   <b> {count}</b>
  </div>
}
function Buttons({setCount}){
  const count = useContext(CountContext)
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

