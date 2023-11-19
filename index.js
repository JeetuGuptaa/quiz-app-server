const express = require("express");
const port = 8000;
const cors = require("cors");
const db = require("./config/db");

db();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", require("./routes"));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server Started at port ${port}`);
});
