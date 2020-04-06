const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title: String,
        authors: [String],
        description: String,
        image: {type: String},
        link: {type: String},
    }    
)

const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;
