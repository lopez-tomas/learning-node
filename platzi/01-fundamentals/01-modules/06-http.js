const http = require('http');

const greetings = () => {
  return 'Hi, how are you?';
}

const router = (req, res) => {
  console.log('New petition');
  console.log(req.url);

  switch(req.url) {
    case '/hola':
      let hi = greetings();
      res.write(hi);
      res.end();
      break;
    default:
      res.write('Error 404');
      res.end();
  }

  // res.writeHead(201, {
  //   'Content-Type': 'text/plain'
  // })
  // res.write("I'm using HTTP from Node.js");

  // res.end();
}

http.createServer(router).listen(3000); // 3000, 3001, 3002,... 8080, 8081, ...

console.log('Listening on port 3000');