const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Mongoose connection
const mongoDB = 'mongodb://localhost/googlebooks';
mongoose.connect(mongoDB, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

//Get the default connection
const db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Add routes, both API and view
app.use(routes)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

