import { useContext } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count.jsx";

function App() {
 

  return (
    <div>
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
    
    </div>
  )
}
function Count(){
  return <div>
   <CountRenderer/>
   <Buttons />
  </div>

}

function CountRenderer(){
  const count =useRecoilValue(countAtom);
  return <div>
   <b> {count}</b>
   <EvenCounterRender/>
  </div>
}
function EvenCounterRender(){
  const isEven  =useRecoilValue(evenSelector);
    return <div>
     {isEven ? null:"It is even"} 
       {/* evenSelector is indeed returning 0 for even numbers and 1 for odd numbers. */}
    </div>
}

function Buttons(){
  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom);
  return <>
    <button onClick={()=>{
      setCount(count => count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count => count-1)
    }}>Decrease</button>
  </>

}


export default App

