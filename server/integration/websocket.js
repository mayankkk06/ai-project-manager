const WebSocket = require("ws");

const setupWebSocket = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (socket) => {
    socket.send("Connected to real-time server");
  });

  return wss;
};

module.exports = setupWebSocket;