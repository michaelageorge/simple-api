'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middleware = jsonServer.defaults();

/*

{
  count: 10,
  reults: [
    {},
    {},
    {}
  ]
}
*/


//Custom output

router.render = (req,res) => {
  res.jsonp({
    count: res.locals.data.length,
    reults: res.locals.data,
  });
};

server.use(middleware);
server.use(router);
server.listen(3000, () => console.log('server is up'));
