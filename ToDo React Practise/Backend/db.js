const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/",{
    dbName:"ToDo"
}).then(()=>console.log("database connected")).catch((error)=>console.log(error))



const addtodo = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed:Boolean
})


const  Todo = mongoose.model("ToDo",addtodo);

module.exports = {
    Todo
}