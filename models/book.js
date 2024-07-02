const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    status: {
        type: String,
        enum: ["available", "booked"],
        default: "available",
    }
});

module.exports = mongoose.model("Book", BookSchema);
