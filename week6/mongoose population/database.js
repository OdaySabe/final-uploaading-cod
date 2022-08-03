const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newLesson", { useNewUrlParser: true });
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

const reviewSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book" },
  reviewText: String,
  critic: { type: Schema.Types.ObjectId, ref: "Critic" },
});

const criticSchema = new Schema({
  name: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});
const Book = mongoose.model("Book", bookSchema);
const Review = mongoose.model("Review", reviewSchema);
const Critic = mongoose.model("Critic", criticSchema);

let b1 = new Book({
  title: "Name of the Wind",
  author: "Patrick Rothfuss",
  reviews: [],
});

let c1 = new Critic({
  name: "William Jeffery",
  reviews: [],
});

let r1 = new Review({
  book: b1,
  critic: c1,
  reviewText: "Excellent Book",
});

Book.findOne({})
  .populate({
    path: "reviews",
    populate: {
      path: "critic",
    },
  })
  .exec(function (err, book) {
    console.log(book.reviews);
  });
Review.find({})
  .populate("book critic")
  .exec(function (err, booksAndCritic) {
    console.log(booksAndCritic);
  });
//// if you want to populat only one document

Critic.findOne({}, function (err, critic) {
  //now we have a single critic
  critic.populate("reviews", function () {
    console.log("====================================");
    console.log(critic.reviews);
  });
});
