const jsonServer = require('json-server');
const autoId = require('json-server-autoid');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use default middlewares
server.use(middlewares);
server.use(router);

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
