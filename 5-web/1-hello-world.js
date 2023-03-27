const http = require('http');

const requestListener = (req,res) => {
  console.dir(req, { depth: 1 });//instead of console.log(req) use .dir to not print nested objects 
  // res.end('Hello World\n');//.end is a shorthand to res.write("string") + res.end()
  res.write('Hello World\n');
  res.end();
}


const server = http.createServer()
server.on('request', requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
