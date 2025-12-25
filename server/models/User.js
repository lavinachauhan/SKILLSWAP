const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    teachSkills: {
        type: [String],
        default: []
    },
    learnSkills: {
        type: [String],
        default: []
    },
    about :{
            type: String,
            default : ""
    },
    requestsSent: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'}],
    requestsReceived: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'}],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }]
})

module.exports = mongoose.model("User", UserSchema);  