const mongoose = require("mongoose");
const env = require("../env");

const db = async () => {
    try {
        await mongoose.connect(env.mongoDB_URL);
        console.log(
            `Successfully Connected to DataBase ${mongoose.connection.host}`
        );
    } catch (err) {
        console.log(`Error : ${err}`);
    }
};

module.exports = db;
