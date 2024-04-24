import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todo").then(async function(res){
        const json = await res.json();
         setTodos(json.response)
      })

      const toggleCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
     
        setTodos(updatedTodos);
      };

  return (
    <div>
      <CreateToDo></CreateToDo>
      <Todos todos={todos} onToggleCompleted={toggleCompleted}></Todos>
    </div>
  )
}

export default App
