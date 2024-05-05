import { useContext } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

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
   <Check/>
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

function Check(){
  const count =useRecoilValue(countAtom);
    return <div>
     {(count % 2==0 ) ? "It is even":null}
    </div>
 

}

export default App

