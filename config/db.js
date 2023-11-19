const mongoose = require("mongoose");
const db = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://holmes0273:RBDn9h5Dn7wugk8f@quiz-app.ahva1l5.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log(
            `Successfully Connected to DataBase ${mongoose.connection.host}`
        );
    } catch (err) {
        console.log(`Error : ${err}`);
    }
};

module.exports = db;
