'use strict'
const fs = require('fs')
const http = require('http')
const map = require('through2-map')

let port = process.argv[2]

const server = http.createServer(function (req, res) {
  if(req.method == 'POST') {
  req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res)
  }
})
server.listen(port)