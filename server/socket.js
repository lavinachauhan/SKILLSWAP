const { Server } = require('socket.io');
const http = require('http');
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin : ["http://localhost:5173"],
        methods: ["GET", "POST"],
    },
});



io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    // join specific chat room
    socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
    });

    // send message to a room
    socket.on("sendMessage", (data) => {
    const { roomId, message } = data;
    io.to(roomId).emit("receiveMessage", message);
    });
});


module.exports = {io, app, server};