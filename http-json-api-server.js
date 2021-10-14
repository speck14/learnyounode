'use strict'
const http = require('http');
const url = require('url');

const port = process.argv[2];

const API = {
  parseTime: '/api/parsetime',
  unixTime: '/api/unixtime'
};

const server = http.createServer((req, res) => {
  const method = req.method;
  const reqUrl = url.parse(req.url, true);

  if (method !== 'GET') {
    res.end();
  }

  const qp = reqUrl.query;
  const date = new Date(qp.iso);

  if (reqUrl.pathname === API.parseTime) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }));
    return;
  }

  if (reqUrl.pathname === API.unixTime) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      unixtime: date.getTime(),
    }));
    return;
  }

  res.end();

}).listen(port);