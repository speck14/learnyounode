'use strict'
const http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    console.log(data)
  })
  response.on('error', function(err) {
    console.error(err);
  })
});