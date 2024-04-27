import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
return <>

 </>
}



export default App

// let counter = 4;

// function App() {
//   const [todos,setTodos] = useState([{id:1,title:"hello1",description:"hello1 ji "},
//   {id:2,title:"hello2",description:"hello2 ji "},
//   {id:3,title:"hello3",description:"hell03 ji "}])


// function addTodo(){
//   const updatedTodos = [...todos];
//   updatedTodos.push({id:counter++,title:Math.random(),description:Math.random()})
//   setTodos(updatedTodos)
// }  

//   return (
//     <>
//     <button onClick={addTodo}>Add todos</button>
//      {todos.map((todo)=><Todo key={todo.id} title={todo.title} description={todo.description}/>)} 
//     </>
//   )
// }



// function Todo({title,description}){
//   return <>
//     <h1>{title}</h1>
//   <h3>{description}</h3>
//   </>

// }

// CrdWrapper

// function App() {
//   //  return <>
//   //    <CardWrapper innerComponent={<TextComponent/>}/>
//   //  </>
//   return <>
//     <CardWrapper>Hoi there</CardWrapper>
//    </>
//   }
  
//   function CardWrapper({children}){
//     return <div style={{border:"2px solid black",padding:20}}>
//         {children}
//     </div>
//   }
  
//   // function CardWrapper({innerComponent}){
//   //   return <div style={{border:"2px solid black",padding:20}}>
//   //       {innerComponent}
//   //   </div>
//   // }
//   // function TextComponent(){
//   //   return <div>
//   //     hllo
//   //   </div>
//   // }