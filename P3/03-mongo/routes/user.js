const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.js");
const {User,Course} = require("../db/index.js")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;
    const check = User.findOne({username:username})
    if(check){
        return res.status(400).send({message: 'User username already exist'})
    }

    await  User.create({
        username:username,
        password:password,
    })
    res.status(200).send({ message: 'User created successfully' })

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic

    const check = await Course.find();
    res.json({
        Courses:check
    })
    
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const uid = req.params.courseId;
    const username = req.headers.username;
    console.log(uid)
   
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: uid
        }
    })
    res.json({
        message: "Purchase complete!"
    })

   
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router