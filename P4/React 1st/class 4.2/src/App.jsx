import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let state= {
//   count: 0
// }

function App() {
   const [count, setCount] = useState(0)
  // function onClickhandler(){
  //  setCount(count + 1)
  // }

  return (
    <div>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <button> Counter {count}
        </button> */}
        <CustomButton count={count} setCount={setCount}> </CustomButton>
       
    </div>
  )
}

function CustomButton(props){
  function onClickhandler(){
    props.setCount(props.count + 1)
   }
   return <button onClick={onClickhandler}>Counter {props.count}</button>
}
export default App
