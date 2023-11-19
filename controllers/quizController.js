const Quiz = require("../models/quiz");

module.exports.createQuiz = async (req, res) => {
    try {
        const newQuiz = await Quiz.create(req.body);
        console.log(newQuiz);
        res.send(newQuiz);
    } catch (err) {
        console.log(err);
    }
};

module.exports.fetchQuiz = async (req, res) => {
    try {
        const quizCode = req.params.quizCode;
        const quiz = await Quiz.findOne({ code: quizCode });
        if (!quiz) {
            return res.status(404).send({ message: "Quiz not found" });
        }
        res.json({ data: quiz });
    } catch (err) {
        consle.log(err);
    }
};
