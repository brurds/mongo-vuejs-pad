const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Question",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    answerA: {
      type: String,
      required: true,
    },
    answerB: {
      type: String,
      required: true,
    },
    answerC: {
      type: String,
      required: true,
    },
    answerD: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  })
);
