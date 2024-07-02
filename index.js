const express = require("express");
const connectDB = require("./connection");
const bookController = require("./controllers/bookController");

const app = express();

// Connect to the database
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Library Management Tool");
});

app.post("/book", bookController.createBook);
app.get("/book", bookController.readBooks);
app.put("/book/:id/status", bookController.updateBookStatus);

app.listen(8000, () => {
    console.log("Server started at port 8000");
});
