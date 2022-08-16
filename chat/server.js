const { Server } = require("socket.io");

const io = new Server(3000, { });

io.on("connection", (socket) => {
console.log('a client connected ')
console.log('new user')

socket.emit('message-chat','Hello World')
socket.on('send-message',message =>{
console.log(message)
socket.broadcast.emit('message-chat',message)
})
});