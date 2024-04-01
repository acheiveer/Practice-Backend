/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
import express  from "express";
import fs from "fs"
import path from 'path';


const app = express();
const __dirname=path.resolve();

app.get("/files",(req,res)=>{

  fs.readdir(path.join(__dirname , "./files/"),(err,file)=>{
     if(err){
      return res.status(404).json({ error: 'Failed to retrieve files'});
  }
  res.json(file);
});
});

app.get("/files/:filename",(req,res)=>{
   const paths=req.params.filename;
 const filepath=(path.join(__dirname,"./files/",paths));
  fs.readFile(filepath,'utf8',(err,data)=>{
    if(err){
      return res.status(404).json({error: "file not found"});
    }
    res.json(data);
  })
})

app.all('*',(req,res)=>{
  res.status(400).send("Route not found")
})
    
app.listen(3000,()=>{
  console.log("sever is running")
})    
 