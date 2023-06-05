const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
    question: {
        type: String,
        require: true,
        trim: true,
    },
    option1: {
        type: String,
        require: true, 
        trim: true,
    },
    option2: {
        type: String,
        require: true,
        trim: true,
    },
    option3: {
        type: String, 
        require: false,
        trim: true,
    },
    option4: {
        type: String,
        require: false,
        trim: true,
    }
})

const Question = model("Question", questionSchema);

module.exports = Question;