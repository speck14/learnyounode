const { Server } = require('http')
const net = require('net')

let date_obj = new Date();

let day = ("0" + date_obj.getDate()).slice(-2)
let month = ("0" + (date_obj.getMonth() + 1)).slice(-2)
let year = date_obj.getFullYear()
let hours = date_obj.getHours();
let minutes = date_obj.getMinutes();

const server = net.createServer(function listener(socket) {
  socket.write(`${year}-${month}-${day} ${hours}:${minutes}`)
  socket.end('\n')
})
server.listen(process.argv[2])
