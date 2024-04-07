const {User} = require("../db")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const husername = req.headers['username'];
    const hpassword = req.headers['password'];
    const check = await User.findOne({
        username: husername,
        password: hpassword
    })

    if(check){
        return next();
    }
    else{
        return res.status(404).send({message: "User Access Denied"})
    }

}

module.exports = userMiddleware;