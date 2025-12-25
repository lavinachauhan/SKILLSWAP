// src/socket.js
import { io } from "socket.io-client";

let socket = null;

export const connectSocket = (token) => {
  if (!token) return null;
  socket = io(process.env.REACT_APP_API_URL || "http://localhost:8080", {
    auth: { token }
  });
  return socket;
};

export const getSocket = () => socket;
export const disconnectSocket = () => { if (socket) socket.disconnect(); socket = null; };
