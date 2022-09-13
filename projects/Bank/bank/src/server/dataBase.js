const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  amount: Number,
  vendor: String,
  category: String,
});
const Transaction = mongoose.model("Transaction", TransactionSchema);
// let dummyData = [
//   { amount: 3200, vendor: "Elevation", category: "Salary" },
//   { amount: -7, vendor: "Runescape", category: "Entertainment" },
//   { amount: -20, vendor: "Subway", category: "Food" },
//   { amount: -98, vendor: "La Baguetterie", category: "Food" },
// ];
// dummyData.forEach((data) => {
//   new Transaction({
//     amount: data.amount,
//     vendor: data.vendor,
//     category: data.category,
//   }).save();
// });
module.exports = Transaction;
