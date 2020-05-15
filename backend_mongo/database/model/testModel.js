const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Test",
  new Schema({
    name:{ type: String },
    questions: [{
      employee: {
        _id: { type: String },
        name: { type: String },
        position: { type: String },
        functional: { type: String },
        register: { type: Number },
        __v: { type: Number }
      },
      _id: { type: String },
      body: { type: String },
      answerA: { type: String },
      answerB: { type: String },
      answerC: { type: String },
      answerD: { type: String },
      correctAnswer: { type: String },
      __v: { type: Number },
    }]
  }
  )
);
