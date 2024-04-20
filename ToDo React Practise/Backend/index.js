const express = require("express");
const {CreateToDo, UpdateTodo} = require('./type.js')

const app = express();
app.use(express.json());


app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsedpaylaod = CreateToDo.safeParse(createPayload);
    if(!parsedpaylaod.success){
        res.status(411).json({
            message: "you sent a wrong input"
        })
        return;
    }

})

app.get("/todo",(req,res)=>{

})
app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const parsepayload = UpdateTodo.safeParse(updatePayload);
    if(!parsepayload.success){
        res.status(411).json({
            message:"you sent a wrong input"
        })
    }
})

app.listen(3000,()=>{
    console.log("server is running");
})