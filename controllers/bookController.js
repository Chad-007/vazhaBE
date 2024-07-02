const Book = require("../models/Book");

const createBook = async (req, res) => {
    try {
        await Book.create(req.body);
        return res.status(200).send("Book Created Successfully");
    } catch (e) {
        return res.status(400).send(e.message);
    }
};

const readBooks = async (req, res) => {
    try {
        const result = await Book.find();
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = await Book.findByIdAndUpdate(id, updateData, { new: true });
        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).send(e.message);
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        return res.status(200).send("Book Deleted Successfully");
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

module.exports = { createBook, readBooks, updateBook, deleteBook };
