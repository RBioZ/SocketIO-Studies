import io from "socket.io-client";
import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const socket = io("http://localhost:3000");

socket.on("connect", async () => {
  //console.log("[MY ID]: " + socket.id);
});

socket.on("message", (msg: string) => {
  console.log(msg);
});

var waitForUserInput = () => {
  rl.question(">", (msg) => {
    if (msg == "/quit") {
      rl.close();
    } else {
      socket.emit("message", msg);
      waitForUserInput();
    }
  });
};

waitForUserInput();
