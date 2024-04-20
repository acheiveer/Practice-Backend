const zod = require("zod")
 
const CreateToDo = zod.object({
    title: zod.string(),
    desciption: zod.string()
})

const UpdateTodo = zod.object({
    id: zod.string()
})

module.exports = {
   CreateToDo:CreateToDo,
   UpdateTodo: UpdateTodo
}

