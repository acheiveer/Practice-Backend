const {Admin} = require("../db")

// Middleware for handling auth
async function  adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const husername = req.headers['username'];
    const hpassword = req.headers['password'];

       const check = await Admin.findOne({
        username: husername,
        password: hpassword
       })
    if(check){
       return next();
    }
    else{
       return res.status(404).send({message: "Admin Access Denied"})
    }
}

module.exports = adminMiddleware;