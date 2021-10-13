'use strict'
const mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3], function (err, data) {
  if (err) 
    return console.log(err);
  else
    data.forEach(el => console.log(el));
})