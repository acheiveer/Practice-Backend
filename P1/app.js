import  express  from "express";
import mongoose, { Model, mongo } from "mongoose";
import path from "path"
import cookieParser from "cookie-parser";
import  Jwt from "jsonwebtoken";
import bcrypt, { genSalt } from "bcrypt";

const app= express();
app.set('view engine','ejs');
const __dirname=path.resolve();

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


mongoose.connect("mongodb://127.0.0.1:27017/",{
    dbName:"p1",
}).then(()=>console.log("Databse connected")).catch((e)=>console.log(e));

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});
const User = mongoose.model("user",userSchema)

// const loginuserSchema = new mongoose.Schema({  
//     email:String,
//     password:String,
// });
// const loginuser= mongoose.model("loginuser",loginuserSchema);

const isAuthenticated = async (req,res,next)=>{
    const {token} = req.cookies;
    
    if(token){
        const decode = Jwt.verify(token,"jsklsjlkjsljflkj")
        req.user = await User.findById(decode._id);
        next();
    }
    else{
        // res.render("login.ejs");
        res.redirect("/login")
    }
}

app.get("/register", async (req,res)=>{
     // res.sendFile(path.join(__dirname ,"views/index.html"));
    // console.log(path.join(__dirname ,"views/index.ejs"));
    //  res.render("register",{name:"singh"});
    // res.sendFile("index.html")

    res.render("register")

}) 


app.get("/",isAuthenticated,(req,res)=>{
    // when we have to access cookie we have to first install a dependency cookie-parser
    //console.log(req.cookies);

    //we can use it as a middleware so we create a function isAuthenticated above
    // const {token} = req.cookies;
    // if(token){
    //     res.render("logout.ejs")
    // }
    // else{
    //     res.render("login.ejs");
    // }

  
   res.render("logout",{name:req.user.name});
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.get("/logout",(req,res)=>{
    // when there is logout page means coookie is not clear so when we click on logout button it clear the cookie means make the token null
    // and expire the token now now ccokie is clear that is no data in token it again redirect to homeoute and now token is emprty so it render login.ejs
    res.cookie("token","null",{
        httpOnly:true,expires:new Date(Date.now())
    });
    res.redirect("/");
})

app.post("/login", async (req,res)=>{
    const {name,email,password}= req.body
    let user = await User.findOne({email});
    
    if(!user){
       return res.redirect("/register");
    }

    // const ismatch = user.password===password;
    const ismatch = await bcrypt.compare(password,user.password)
    if(!ismatch){
       return res.render("login",{email,message:"Incorrect Password"});
    }
    
    const token = Jwt.sign({_id:user._id},"jsklsjlkjsljflkj");
    res.cookie("token",token,{
        httpOnly:true,expires:new Date(Date.now()+60*1000)
    });
    console.log(user);
    res.redirect("/");
   

    //Here when there is no cookie means token is empty then it render login.ejs and after login token with value pkumar is generated in cookie then
    //it redirect to home route and now there is cookie so it now render logout.ejs so we see logout page
    // res.cookie("token",loggeduser._id,{
    //     httpOnly:true,expires:new Date(Date.now()+60*1000)
    // });

    // res.cookie("token",token,{
    //     httpOnly:true,expires:new Date(Date.now()+60*1000)
    // });

    // res.redirect("/");
})

app.post("/register", async (req,res)=>{
    const {name,email,password}= req.body

    const user = await User.findOne({email})
    if(user){
       return  res.render("register",{message:"User already exist"});
    }

    const hashedpassword = await bcrypt.hash(password,10)

    await User.create({name:name,email:email,password:hashedpassword});
     res.redirect("/")
})



const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is started on ${PORT}`);
})
