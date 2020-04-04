// const axios = require('axios');
// const db = require('../models');
// const path = require('path');

// module.exports = function(app) {
//   app.get('/api/books', (req, res) => {
//     console.log('get books')
//     db.BookModel.find({})
//       .then( booksData => {
//         res.json(booksData);
//       })
//       .catch( err => {
//         res.json(err);
//       })

//   });

//   app.post("/api/books", (req, res) => {
//     db.Book.create(req.body)
//       .then(
//       (response) => {
//         res.json({successful: response});
//       })
//       .catch(
//       (err) => {
//         res.json({error: err});
//       });
//   });

//   app.delete("/api/books/:id", (req, res) => {
//     db.Book.findByIdAndDelete(req.params.id)
//       .then(
//         (response) => {
//             res.json({successful: response});
//         })
//         .catch(
//         (err) => {
//           rres.json({error: err});
//         });
//   });

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });
// }