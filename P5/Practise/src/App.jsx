import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() { 
    const [selectedId,setselectedId] = useState(1)
return <>
        <button onClick={()=>{
            setselectedId(1)
        }}>1</button>
        <button onClick={()=>{
            setselectedId(2)
        }}>2</button>
        <button onClick={()=>{
            setselectedId(3)
        }}>3</button>
        <button onClick={()=>{
            setselectedId(4)
        }}>4</button>
        <Todo id={selectedId}/>
 </>
}

function Todo({id}){
    const [todos,setTodos] =useState({});

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id="+ id)
        .then(function(response){
            setTodos(response.data.todo)
        })
    }, [id])


    return <>
        <h6>ID:{id}</h6>
        <h1>{todos.title}</h1>
       <h4> {todos.description}</h4>
    </>
}



export default App
