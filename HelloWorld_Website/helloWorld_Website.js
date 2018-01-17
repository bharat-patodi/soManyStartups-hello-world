const http = require('http');
const host = '127.0.0.1';
const port = '9000';
const server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('<h1>Hell Worls</h1>');
});
