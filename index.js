const https = require('https');


const requestListener = function (req, res) {
  const date = Date();
  res.writeHead(200);
  res.end(`${date}`);
};

const server = https.createServer(requestListener);
server.listen(process.env.PORT);
