const express = require("express");
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect( "mongodb://localhost/googlebooks" || process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Add routes, both API and view
app.use(routes)


//Get the default connection
const db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
