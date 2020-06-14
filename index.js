const http = require('http');


const requestListener = function (req, res) {
  const date = Date();
  res.writeHead(200);
  res.end(`<h1>${date}</h1>`);
};

const server = http.createServer(requestListener);
server.listen(3000);
