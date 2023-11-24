require("dotenv").config();
const express = require("express");
const port = 8000;
const cors = require("cors");
const db = require("./config/db");
console.log(process.env);
db();

const app = express();
app.use(express.json());
const corsOptions = {
    origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

app.use("/", require("./routes"));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server Started at port ${port}`);
});
