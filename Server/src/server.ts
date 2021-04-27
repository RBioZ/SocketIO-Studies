import axios from "axios";
import express, { Request, Response } from "express";
import ioserver, { Socket } from "socket.io";
import ioclient from "socket.io-client";
const app = express();
const server = require("http").Server(app);
const port = 3000;
let io = require("socket.io")(server);

io.on("connection", (socket: Socket) => {
  console.log(socket.id);
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
