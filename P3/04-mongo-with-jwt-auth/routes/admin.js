const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db")
const router = Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const secretkey = "HelloPrabhakar123"

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const check = await Admin.findOne({username:username})
    const hashedpassword = await bcrypt.hash(password,10)
    if(check){
       return res.send({message:"User already exists"})
    }
    Admin.create({username:username,password:hashedpassword})
    res.status(202).send("Created Successfully")
    

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try{
        const {username,password} = req.body
        const user = await Admin.findOne({username})
        if(!user){
            return res.status(400).send("username not exists")
        }
        const hashedpassword = await bcrypt.compare(password,user.password)
        if(!hashedpassword){
            return res.send({message:"Password is Incorrect"})
        }
        const token = jwt.sign({username},secretkey,{expiresIn:'1h'})
        res.status(200).json({ token });
    }catch(error){
         res.status(500).json({ error: 'Login failed' });
    }
   
   
    

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title,description,price,imageLink} = req.body;
    const newcourse = Course.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink
    })
    res.send(200).json({message: "Courses added", courseId:newcourse._id})
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const resposne = await Course.find({})
    res.json({
        cousres: resposne
    })
});

module.exports = router;