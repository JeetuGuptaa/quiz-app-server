const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema(
    {
        question: String,
        options: [String],
        correct_answer: String,
    },
    {
        timestamps: true,
    }
);

const quizSchema = new Schema({
    code: { type: String, required: true },
    questions: [questionSchema],
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
