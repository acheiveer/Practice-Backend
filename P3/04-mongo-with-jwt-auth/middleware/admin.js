// Middleware for handling auth
const secretkey = require("../routes/admin.js")
const jwt = require("jsonwebtoken")


function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization; // bearer token
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1]; // token
 
        const decodedValue = jwt.verify(jwtToken, secretkey);
        if (decodedValue.username) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
  
        
    
}

module.exports = adminMiddleware;