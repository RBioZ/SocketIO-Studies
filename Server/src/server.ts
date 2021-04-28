import express from "express";
import { Socket } from "socket.io";
const app = express();
const server = require("http").Server(app);
const port = 3000;
let io = require("socket.io")(server);

interface IMessage {
  content: string;
}

io.on("connection", (socket: Socket) => {
  console.log("\x1b[32m%s\x1b[0m", "[NEW CONNECTION]: ", socket.id);

  socket.on("disconnect", function () {
    console.log("\x1b[31m%s\x1b[0m", "[DISCONECTED]: ", socket.id);
  });

  socket.on("message", (msg: string) => {
    socket.broadcast.emit("message", `${msg}`);
  });
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
