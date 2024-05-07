import {RecoilRoot,useSetRecoilState} from "recoil"
import { AtomDescription, AtomTitle } from "./store/atoms/todo.jsx"

function App(){
  return (
    <div>
    <RecoilRoot>
     <Todo/>
    </RecoilRoot>
    
  </div>
  )
}
function Todo(){
  const setTitle = useSetRecoilState(AtomTitle)
  const setDescription = useSetRecoilState(AtomDescription)
  
  return <div>
    <input placeholder="Title" onChange={(e)=>{
      setTitle(e.target.value)
    }}></input>
    <input placeholder="description"  onChange={(e)=>{
      setDescription(e.target.value)
    }}></input>
    <button>Add Todo</button>
  </div>
}


export default App
