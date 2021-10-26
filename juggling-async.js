'use strict'
const http = require('http')
const bl = require('bl')

let url_1 = process.argv[2];
let url_2 = process.argv[3];
let url_3 = process.argv[4];

  http.get(url_1, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log(data.toString());
      http.get(url_2, function(response) {
        response.pipe(bl(function(err, data) {
          if(err) {
            return console.error(err, data);
          }
          console.log(data.toString());
          http.get(url_3, function(response) {
            response.pipe(bl(function(err, data) {
              if(err) {
                return console.error(err, data);
              }
              console.log(data.toString());
            }))
          })
        }))
      })
    }))
  })


