const jwt = require("jsonwebtoken");
const secretKey = process.env.secretKey;

module.exports = function(req, res, next){
    try{
        const token = req.headers?.authorization?.split(" ")[1];
        if(!token) return res.status(401).json({status : false, message : "Access Denied"});
        jwt.verify(token, secretKey, (err, decode) => {
            if(err) return res.status(401).json({status : false, message : "Invalid Token"});
            req.userId = decode?.id; // this will store userid of logged in user
            next(); //this will continue to route
        });
    } catch(err){
        return res.status(401).json({status : false, message : "Auth error"});
    }
};