const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.use((req, res, next) => {
  const err = new Error("Something fucked up")
  err.statusCode = 404;
  next(err);
})

app.use((err, req, res, next) => {
  console.log(err)
  res.statusCode = err.statusCode || 500
  const response = {
    message: err.message || 'Something went wrong',
    statusCode: err.statusCode || 500,


  }

  res.json(response)
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
