
export function Todos({todos,onToggleCompleted}){
    return <div>
        {todos.map(function(todo,index){
            return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    onToggleCompleted(index)
                }}>{todo.completed == true ? "Completed" : "mark as completed"}</button>
            </div>
        })}
    </div>
}