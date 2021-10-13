'use strict'
const http = require('http')
const bl = require('bl')

function getResponseData(url) {
  let res_data = ''
  http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        console.error(err)
      }
    res_data = data.toString()
    console.log(res_data)
    return res_data
    }))
  })
}


let url_1 = getResponseData(process.argv[2])
let url_2 = getResponseData(process.argv[3])
let url_3 = getResponseData(process.argv[4])

if (url_1 && url_2) {
  console.log(url_1)
  console.log(url_2)
  console.log(url_3)
}


