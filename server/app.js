const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoute = require("./routes/userRoutes");

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}))

const MONGO_URL = process.env.MONGO_URL;
// Database connection
main()
.then(() => {
    console.log("Mongo DB Connection Successful");
})
.catch((err) => {
    console.log("Failed to connect database ", err);
}) 
 
async function main(){
    await mongoose.connect(MONGO_URL);
}

// Home route
app.get("/", (req, res) => {
    res.send("Hi I am root");
})

app.use("/user", userRoute);



// Server Start
app.listen(8080, () => {
    console.log("Server is running on port 8080");
})