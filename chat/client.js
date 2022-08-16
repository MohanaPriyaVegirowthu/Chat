var socket = io('http://localhost:3000', { transports : ['websocket'] });
const messagesend = document.getElementById('form')
const messageinput = document.getElementById('input')
const messagecontainer = document.getElementById('container')
socket.on('message-chat', data => {
    appendMessage(data)
});
messagesend.addEventListener('submit',e =>{
  e.preventDefault()
  const message = messageinput.value
  socket.emit('send-message',message)
  messageinput.value = ''
})
function appendMessage(message){
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messagecontainer.append(messageElement)
}