import axios from "axios";

export default {
    // Gets searched book from Google Books API
    getBookList: function(book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
    },
    // Gets all books from mongo database
    getBooks: function() {
        return axios.get("/api/books/");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books/", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};