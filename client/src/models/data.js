const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title: {type: String},
        authors: {type: Array},
        description: {type: String},
        image: {type: String},
        link: {type: String},
    }    
)

const BookModel = mongoose.model('BookModel', BookSchema);

module.exports = BookModel;
