const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  socket.on("send-location", function (data) {
    io.emit("receive-location", {
      id: socket.id,
      ...data,
    });
    console.log(data);
  });

  socket.on("disconnect", () => {
    io.emit("user-disconnected", {
      id: socket.id,
    });
  });
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000);
