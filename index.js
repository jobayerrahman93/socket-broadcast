const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);




let sellNmsp= io.of("/sell");

sellNmsp.on('connection',(socket)=>{
    sellNmsp.emit('separateEvent','This is a sell page');
});

let buyNmsp= io.of("/buy");
buyNmsp.on('connection',(socket)=>{
    buyNmsp.emit('separateEvent','This is a buy page');
})




//     broadcast for specific user
// io.on('connection', (socket) => {
//     console.log('a user connected');


//     broad cast for every user
//     io.sockets.imit used for broadcast

//     io.sockets.emit('myBroadcast','you are listening your favorite broadcast guys');

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});