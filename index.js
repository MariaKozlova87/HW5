// HW5

const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req) 
  res.writeHead(200);
  res.end('oink!');
  
}).listen (8080);



// #1 Express
const express = require('express');
const app = express()
app.use(express.static(__dirname + '/node_test'));
app.get('/', function (req, res) {
  res.send('0729e868c1d5c70466a273a96f17d3c7.jpg');
  
})
app.listen (8080);


// #2 Express
const express = require('express');
const app = express();
const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
app.get('/', function (req, res) {
res.send(new Date);
})
app.listen (8000);

// #3 Express

const express = require('express');
const app = express()
app.use((request, response, next) => {
    console.log(request.headers)
    next()
})
app.use((request, response, next) => {
    request.chance = Math.random()
    next()
})
app.get('/', (request, response) => {
    response.json({
        chance: request.chance
    })
})
app.listen(3000);