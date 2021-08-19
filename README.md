# node-access-route

Parse the http header to determine the client's IP address.

## 👏 Getting Started

The basic usage is as follows:

```typescript
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
```

## 🚀 Installation

```
$ npm install @karibash/node-access-route
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/Karibash/node-access-route/issues) if you want to contribute.

## 📝 License

Copyright © 2020 [@Karibash](https://twitter.com/karibash).

This project is [```MIT```](https://github.com/Karibash/node-access-route/blob/master/LICENSE) licensed.
