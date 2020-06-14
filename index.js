const express = require('express');
const { response } = require('express');


const app = express();

app.get('/', (request, response) => {
  const date = Date();
  response.setHeader('Content-Type', 'text/plain');
  response.send(`${date}`);
});

app.listen(process.env.PORT, () => console.log('Server starte successfully'));
