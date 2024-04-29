import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() { 
return <>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <Todo id={4}/>
 </>
}

function Todo({id}){
    const [todos,setTodos] =useState({});

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id="+ id)
        .then(function(response){
            setTodos(response.data.todo)
        })
    }, [])


    return <>
        <h1>{todos.title}</h1>
       <h4> {todos.description}</h4>
    </>
}



export default App
