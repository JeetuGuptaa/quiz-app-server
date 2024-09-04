const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const databaseConnectionPassword = process.env.DATABASE_CONNECTION_PASSWORD;

const URL = `mongodb+srv://jeetudev1412:${databaseConnectionPassword}@jobportal.eixaw8e.mongodb.net/?retryWrites=true&w=majority&appName=JobPortal`;

const db = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("Error connecting MongoDB", error);
  }
};

module.exports = db;
