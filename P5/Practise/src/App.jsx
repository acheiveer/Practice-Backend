import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todos,setTodos] = useState([{id:1,title:"hello1",description:"hello1 ji "},
  {id:2,title:"hello2",description:"hello2 ji "},
  {id:3,title:"hello3",description:"hell03 ji "}])


function addTodo(){
  const updatedTodos = [...todos];
  updatedTodos.push({id:4,title:Math.random(),description:Math.random()})
  setTodos(updatedTodos)
}  

  return (
    <>
    <button onClick={addTodo}>Add todos</button>
     {todos.map((todo)=><Todo title={todo.title} description={todo.description}/>)} 
    </>
  )
}



function Todo({title,description}){
  return <>
    <h1>{title}</h1>
  <h3>{description}</h3>
  </>

}

 

export default App
