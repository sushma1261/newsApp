const WebSocket = require("ws");

// // Connect to the Java WebSocket backend
// const ws = new WebSocket("");

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NjcwNDY1MS1mYjMyLTQ0MjctOGZhNi1jYmZmNTI2YTg3NWQiLCJpYXQiOjE3MzcxNjE0OTUsImV4cCI6MTczNzE2MjM5NX0.n3ERQpT-mk9auTsmR9Qz6_dIXRM15P5_4hHXk0NMEco";

const ws = new WebSocket("ws://localhost:8080/ws", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

ws.on("open", () => {
  console.log("WebSocket connected");
  // Send messages here
});

ws.on("message", (data) => {
  console.log("Received:", data);
});

// // Event: Connection opened
// ws.on("open", () => {
//   console.log("Connected to the WebSocket server.");

//   // Send a message to the server
//   ws.send("Hello from Node.js!");
// });

// // Event: Message received from the server
// ws.on("message", (message) => {
//   console.log(`Received from server: ${message}`);
// });

// Event: Connection closed
ws.on("close", () => {
  console.log("Connection to the WebSocket server closed.");
});

// Event: Error occurred
ws.on("error", (error) => {
  console.error(`WebSocket error: ${error.message}`);
});
