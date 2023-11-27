const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("user connection");
  socket.on("on-chat", (data) => {
    io.emit("user-chat", data);
  });
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
