const mongoose = require("mongoose");

const db = async () => {
    try {
        await mongoose.connect(process.env.mongoDB_URL);
        console.log(
            `Successfully Connected to DataBase ${mongoose.connection.host}`
        );
    } catch (err) {
        console.log(`Error : ${err}`);
    }
};

module.exports = db;
