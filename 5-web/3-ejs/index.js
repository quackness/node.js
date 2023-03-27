const express = require('express');

const server = express();

server.set('view engine', 'ejs');//set exxpress to read ejs

server.get('/', (req, res) => {
  res.render('index');//render templates
});

server.get('/about', (req, res) => {
  res.render('about');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
