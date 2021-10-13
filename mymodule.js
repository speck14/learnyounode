'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function getFilesByExtension (dir_name, file_extension, callback) {
  fs.readdir(dir_name, function (err, files) {
    if(err) {
      return callback(err)
    }
    else {
      let ext_name = "." + file_extension;
      const data = files.filter(file => path.extname(file) == ext_name);
      callback(null, data)
      }
    })
}