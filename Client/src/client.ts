import io, { Socket } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", async () => {
  console.log(socket.id);
});
