const express = require("express");
const app = express();
const client = require("./connection");
const bookController = require("./controllers/bookController");

client.connect("mongodb+srv://jomalsanish:pgqMaC0QHaq1BD6s@cluster0.rtmccwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then((res) => {
        console.log("Connected to mongodb");
    })
    .catch((err) => {
        console.log("Failed to connect to mongodb");
        console.log(err);
    });

app.use(express.json());

app.post("/book", bookController.createBook);
app.get("/book", bookController.readBooks);
app.put("/book/:id", bookController.updateBook);
app.delete("/book/:id", bookController.deleteBook);

app.listen(8000, () => {
    console.log("Server started at port 8000");
});
