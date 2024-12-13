require('dotenv').config();
const mongoose = require('mongoose');

// MongoDB URI (from MongoDB Compass or default)
const mongoURI = "mongodb://localhost:27017/inotebook"; // MongoDB Compass simplified connection string

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Connected to Mongo Successfully"))
        .catch(err => console.error("Error connecting to MongoDB:", err));
}

module.exports = connectToMongo;
