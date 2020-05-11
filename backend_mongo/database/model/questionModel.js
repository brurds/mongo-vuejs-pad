const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Question",
  new Schema({
    employee: {
      _id:{
        type: String
      },
      name: {
        type: String
      },
      position:{
        type: String
      },
      functional: {
        type: String
      },
      register:{
        type: Number
      },
      __v:{
        type: Number
      }
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
