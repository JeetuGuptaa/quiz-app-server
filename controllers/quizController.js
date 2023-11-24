const Quiz = require("../models/quiz");
const { nanoid } = require("nanoid");

module.exports.createQuiz = async (req, res) => {
    try {
        console.log(req.body);
        let quizCode = nanoid(8);
        let quiz = await Quiz.findOne({ code: quizCode });
        while (quiz) {
            quizCode = nanoid(8);
            quiz = await Quiz.findOne({ code: quizCode });
        }
        const data = {
            questions: req.body,
            code: quizCode,
        };

        const newQuiz = await Quiz.create(data);
        console.log(newQuiz);
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
