const express = require('express');
const db = require('../db')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fileController = require('./controllers/fileController');
const cors = require('cors');

// EB URL:  PublicPantry-env-1.pgpkjhwk9z.us-west-1.elasticbeanstalk.com

// enable CORS
app.use(cors());
app.options('*', cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.get('/with-cors', cors(), (req, res, next) => {
//     res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' })
//   })

// parsing request body
app.use(bodyParser.json())

// handle requests for static files (HTML, JS, CSS)
app.use(express.static(path.resolve(__dirname, '../dist')))

// route handler to respond with main app
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'))
  })
  
// get all entries
app.get('/entries', fileController.getAllEntries);


// get specific entry
// app.get('/entries/:id/', fileController.getEntry);


// create an entry
app.post('/entries', fileController.createEntry);


// update an entry


// delete an entry


// test map route
app.get('/test', (req, res) => {

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