import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
    const [todos,setTodos] =useState([]);

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(function(response){
            setTodos(response.data.todos)
        })
    }, [])
    
return <>
        {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
 </>
}

function Todo({title,description}){
    return <>
        <h1>{title}</h1>
        {description}
    </>
}



export default App
