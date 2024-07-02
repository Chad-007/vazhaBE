const Book = require("../models/book");

const createBook = async (req, res) => {
    const { id, title, status } = req.body;
    const newBook = new Book({ id, title, status });

    try {
        await newBook.save();
        res.status(201).send("Book added successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const readBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateBookStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (status !== "booked" && status !== "not booked") {
        return res.status(400).send("Invalid status value");
    }

    try {
        const book = await Book.findOneAndUpdate({ id }, { status }, { new: true });
        if (!book) return res.status(404).send("Book not found");

        res.status(200).send("Book status updated successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { createBook, readBooks, updateBookStatus };
