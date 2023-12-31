const http = require('http');

http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case '/':
      res.write("<h1>Home Page</h1>");
      break;
    case '/about':
      res.write("<h1>About Page</h1>");
      break;
    case '/contact':
      res.write("<h1>Contact Page</h1>");
      break;
    default:
      res.write("<h1>404 Page Not Found</h1>");
      break;
  }
  res.end();
}).listen(8080);





