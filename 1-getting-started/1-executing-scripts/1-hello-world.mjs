// const http = require('http');
import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

//activate with listen 
server.listen(4242, () => {
  console.log('Server is running slow...');
});
