const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.js");
const router = Router();
const {Admin,Course} = require("../db")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    // const username = req.body.username;
    // const password = req.body.password;
    const {username,password} = req.body;

    const check = await Admin.findOne({ username:username });
    if(check){
        return res.status(400).send({ message: 'Admin Username already exist' });
    }

    await Admin.create({
        username:username,
        password:password
    })
    res.status(200).send({ message: 'Admin created successfully' });

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title,description,price,imageLink} = req.body;

   const newcourse = await Course.create({
    title:title,
    description:description,
    price:price,
    imageLink:imageLink
   })
   res.status(200).send({message:'Course created successfully',courseId:newcourse._id})
   


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   const response =  await Course.find();
   res.json({
    courses: response
   })

     
});

module.exports = router;