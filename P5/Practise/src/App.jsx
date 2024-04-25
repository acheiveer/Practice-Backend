import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
    <Headertitle/>
     <Header title="harkirat2"></Header>  
     
    </>
  )
}

function Headertitle(){
  const [firsttitle,firstsetTitle] = useState("My name is harkirat ")
 
  function updatetitle(){
    firstsetTitle("my name is " + Math.random());
  }

return <>
 <button onClick={updatetitle}>Click me to change the title</button>
 <Header title={firsttitle}/>

</>
}

function Header({title}){
  return <div>
    {title}
  </div>
}

 

export default App
