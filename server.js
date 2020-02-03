const express = require("express");
app = express();
server = require("http").createServer(app);
io = require("socket.io").listen(server);
user = [];
connection = [];

//start server conn.
server.listen(process.env.PORT || 3000);
console.log("server running on port 3000...");
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
//start socket connection
io.sockets.on("connection", function() {
  const socket = io("http://localhost");
  connections.push(socket);
  console.log("connected: %s sockets connected", connections.length);

  //Disconnect
  socket.on("Disconnect", function(data) {
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected %s sockets connected", connections.length);
  });
  console.debug("socket :" + socket.data);
});
