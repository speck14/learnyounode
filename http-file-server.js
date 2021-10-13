'use strict'
const fs = require('fs')
const http = require('http')

const server = http.createServer(function (req, res) {
  const src = fs.createReadStream(process.argv[3])
  src.pipe(res);
})
server.listen(process.argv[2])