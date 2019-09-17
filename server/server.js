const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// REQUIRE routers

// parsing request body
app.use(bodyParser.json())

// handle requests for static files (HTML, JS, CSS)

// DEFINE route handlers

// route handler to respond with main app
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'))
  })
  

// catch-all route handler for any requests to an unknown route
app.get('*', function (req, res) {
    res.status(404);
  });

// define global error handler
app.use(function (err, req, res, next) {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }
    }
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
  })
  

// listener
app.listen(port, () => console.log(`app listening on port ${port}!`))

module.exports = app;