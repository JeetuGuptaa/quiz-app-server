const Quiz = require("../models/quiz");
const { nanoid } = require("nanoid");

module.exports.createQuiz = async (req, res) => {
    try {
        let quizCode = nanoid(8);
        let quiz = await Quiz.findOne({ code: quizCode });
        while (quiz) {
            quizCode = nanoid(8);
            quiz = await Quiz.findOne({ code: quizCode });
        }
        req.body.code = quizCode;
        const newQuiz = await Quiz.create(req.body);
        res.json({ message: "Quiz created Successully", quizCode: quizCode });
    } catch (err) {
        console.log(err);
        res.json({ error: "Internal Server Error" });
    }
};

module.exports.fetchQuiz = async (req, res) => {
    try {
        const quizCode = req.params.quizCode;

        const quiz = await Quiz.findOne({ code: quizCode });
        if (!quiz) {
            return res.json({ error: "Quiz Not Found" });
        }
        res.json({ data: quiz });
    } catch (err) {
        console.log(err);
        res.json({ error: "Internal Server Error" });
    }
};
