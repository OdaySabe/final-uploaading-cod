const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  tilte: String,
  author: String,
  pages: Number,
  geners: [String],
  rating: String,
});
const Book = mongoose.model("book", bookSchema);
module.exports = Book;
