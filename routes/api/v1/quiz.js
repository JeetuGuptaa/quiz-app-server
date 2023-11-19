const express = require("express");
const router = express.Router();
const quizController = require("../../../controllers/quizController");
router.get("/", (req, res) => {
    res.send("<h1>Quiz Routes</h1>");
});

router.post("/createQuiz", quizController.createQuiz);
router.get("/fetchQuiz/:quizCode", quizController.fetchQuiz);

module.exports = router;
