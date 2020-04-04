const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const BookModel = require("./client/src/models/data")
const router = express.Router();
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Mongoose connection
const mongoDB = 'mongodb://localhost:27017/googlebooks';
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

// Route for getting books from db
app.get('/api/books', function(req, res) {
  BookModel.find({})
    .then(
      (booksData) => {
        res.json(booksData)
      }
    )
    .catch(
      (err) => {
        res.json({error: err})
      }
    )
});

// Route for saving books into db
app.post('/api/books', function(req, res) {
  BookModel.create(req.body)
    .then(
      (response) => {
        res.json({successful:response});
      }
    )
    .catch(
      (err) => {
        res.json({error:err})
      }
    )
});

app.get("*", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.sendFile(path.join(__dirname, "./client/build/index.html"));
  } 
  res.sendStatus(404);
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

