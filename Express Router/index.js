// app.js
const express = require('express');
const app = express();
const port = 5555;
// Import the userRouter module
const userRouter = require('./routes/users');

// Mount the userRouter at '/users'
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('<h1>1st Express App</h1>');
}); 

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
