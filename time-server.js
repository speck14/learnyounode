 'use strict'
const net = require('net')
let port = process.argv[2]

function now () {
  const date_obj = new Date()
  return `${date_obj.getFullYear()}-${("0" + (date_obj.getMonth() + 1)).slice(-2)}-${("0" + date_obj.getDate()).slice(-2)} ${date_obj.getHours()}:${date_obj.getMinutes()}`
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(port) 