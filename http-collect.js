'use strict'
const http = require('http')

//Approach 1) Collect data across multiple events, append results prior to printing output
http.get(process.argv[2], function(response) {
  let num_chars = 0;
  let str_chars = '';
  response.setEncoding('utf8');
  response.on('data', function(data) {
    str_chars += data;
    num_chars += data.length;
  })
  response.on('end', function() {
    try {
      console.log(num_chars);
      console.log(str_chars);
    }
    catch(e) {
      console.error(e.message);
    }
  })
  response.on('error', function(err) {
    console.error(err.message);
  })
}) 
