const mongoose = require("mongoose");

const uri = "mongodb+srv://jomalsanish:pgqMaC0QHaq1BD6s@cluster0.rtmccwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB");
        console.error(err);
        process.exit(1); // Exit the process with a failure code
    }
};

module.exports = connectDB;
