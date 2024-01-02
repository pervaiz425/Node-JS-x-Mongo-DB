const express = require('express');
const app = express();

const appLogger = (req, res, next) => {
   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
   next();
}

app.use(appLogger);

app.get("/", (req, res) => {
   console.log("Hello World");
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});