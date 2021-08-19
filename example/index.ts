import express from 'express';
import accessRoute from '@karibash/node-access-route';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.json(accessRoute(request));
});

app.listen(port, () => {
  console.log(`Example app listening at http://127.0.0.1:${port}`);
});
