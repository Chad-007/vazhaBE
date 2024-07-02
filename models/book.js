const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    status: { type: String, enum: ["booked", "not booked"], default: "not booked" }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
