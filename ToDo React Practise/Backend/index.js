const express = require("express");
const {UpdateTodo, CreateToDo} = require('./type.js');
const { Todo } = require("./db.js");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());


app.post("/todo", async (req,res)=>{
    const createPayload = req.body;
    const parsedpaylaod = CreateToDo.safeParse(createPayload);
    if(!parsedpaylaod.success){
        res.status(411).json({
            message: "you sent a wrong input"
        })
        return;
    }
    await Todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        message:"Todo created"
    })

})

app.get("/todo",async (req,res)=>{
    const response = await Todo.find({}) ;
    res.json({
        response
    })

})
app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsepayload = UpdateTodo.safeParse(updatePayload);
    if(!parsepayload.success){
        res.status(411).json({
            message:"you sent a wrong input"
        })
    }
    await Tod.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })


})

app.listen(3000,()=>{
    console.log("server is running");
})