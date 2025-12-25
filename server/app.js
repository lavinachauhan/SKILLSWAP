const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const {app, server} = require("./socket");
dotenv.config();

const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");


app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const MONGO_URL = process.env.MONGO_URL;

main()
    .then(() => console.log("MongoDB Connection Successful"))
    .catch((err) => console.log("Database connection failed: ", err));

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/", (req, res) => {
    res.send("Hi, I am root route!");
});

app.use("/user", userRoutes);
app.use("/message", messageRoutes);

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

