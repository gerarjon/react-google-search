import axios from 'axios';

export default {
  // Gets searched book from Google Books API
  getBookList: function(book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  },
  // Gets all books from mongodb
  getBooks: function() {
    return axios.get('/api/books');
  },
  // Saves book to mongodb
  savedBook: function(savedBooks) {
    return axios.post('/api/books', savedBooks);
  },
  // Deletes book from mongodb
  deleteBook: function(id) {
    return axios.delete('/api/books/' + id);
  }
};