const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>V1 API</h1>");
});

router.use("/quiz", require("./quiz.js"));

module.exports = router;
