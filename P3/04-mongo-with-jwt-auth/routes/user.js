const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db/")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const seckey = "asdfkshdfasjkdfhkasjhdf"

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username,password} =req.body;
    const user = await User.findOne({username:username});
    if(user){
        return res.send({message: "user already exists"})
    }
    const hashedpassword = await bcrypt.hash(password,10)
    User.create({username:username,password:hashedpassword});
    res.status(200).send({message:"user craeted"});
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username})
        if(!user){
            return res.json({message: "User not exists"})
        }
        const hashedpassword = await bcrypt.compare(password,user.password);
        if(!hashedpassword){
            return res.send({message: "Password is Incorrect"})
        }
        const token = jwt.sign({username},seckey,{expiresIn:'1h'})
        res.status(200).json({token})
    }catch(error){
        res.status(500).json({error: "Login Failed"})
    }
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find()
   
    res.send({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router