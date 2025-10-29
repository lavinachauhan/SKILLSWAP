const express = require("express"); 
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secretKey = "lkadeuwf!@#$%6ioeyr12347865347858921e";

// Register
router.post("/Signup", async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email ||!password) return res.status(400).json({status: false, message: "All files are require"})
    
        const existingUser = await User.findOne({email});
        if(existingUser){
           return res.status(400).json({status: false, message: "Email Already registered"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password : hashPassword});
        await newUser.save();
        res.status(201).json({ status: true, message: "User registered successfully", user: newUser });
    }
    catch(error){
        return res.status(400).json({status: false, message: "Something went wrong", error: error.message})
    }
}) 

// Login
router.post("/SignIn", async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email ||!password) return res.status(400).json({status: false, message: "All files are require"})
            
        const user = await User.findOne({email})
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(400).json({status: true, message : "Invalid Credentials"})
        }
        
        const token = jwt.sign({id: user._id, email : user.email}, secretKey, {expiresIn: "1hr"})
        res.status(201).json({ status: true, message: "Login successfully", token : token});
    }
    catch(error){
        return res.status(400).json({status: false, message: "Something went wrong", error: error.message})
    }
}) 

// Profile
router.post("/profile", async (req, res) => {
    try{
        const token = req.headers?.authorization?.split(' ')[1];
        if(!token) return res.status(400).json({ status: false, message: "Access Denied"});
        jwt.verify(token, secretKey, async (err, decode) => {
            const user = await User.findById(decode?.id);
            if(!user) return res.status(400).json({ status: false, message: "Invalid Token"});
            const userData = {
                id: user?.id,
                name: user?.name,
                email: user?.email
            }
            return res.status(201).json({ status: true, message: "Profile Data", data: userData});
        })
    }
    catch(error){
        return res.status(400).json({status: false, message: "Something went wrong", error: error.message})
    }
}) 
module.exports = router;