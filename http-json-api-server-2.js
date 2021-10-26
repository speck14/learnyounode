'use strict'
const http = require('http')
const url = require('url')
const port = process.argv[2]

const API = {
  parseTime: '/api/parsetime',
  unixTime: '/api/unixtime'
}


const server = http.createServer((req, res) => {
  const method = req.method;
  const reqUrl = url.parse(req.url, true);

  if (method !== 'GET') {
    res.end();
  }

  const req_query = reqUrl.query;
  const date = new Date(req_query.iso);

  res.writeHead(200, { 'Content-Type': 'application/json' })
  if (reqUrl.pathname === API.parseTime) {
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }))
    return;
  }
  if (reqUrl.pathname === API.unixTime) {
    res.end(JSON.stringify({
      unixtime: date.getTime()
    }))
    return;
  }
  res.end();
})
server.listen(port)

/*  
1)check if api begins with: /api/parsetime or /api/unixtime
2) check if request is a "GET" request
3) If /api/parsetime: get hr/min/sec from query string
  a. parse query string from url  
  b. respond with json hour, minute, second
  c. JSON.stringify()
  4)If unixtime, respond with UNIX epoch
  5) response header: res.writeHead(200, { 'Content-Type': 'application/json' })
  6) Use JS Date() object to print dates
      a.new Date().toISOString() - dates in ISO format
      b. Date.getTime() - to get current time
  */