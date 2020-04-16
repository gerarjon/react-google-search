const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Mathes with '/api/books'
router.route('/')
  .get(booksController.findAll)
  .post(booksController.create);

// Mathes with 'api/books/:id'
router.route('/:id')
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;