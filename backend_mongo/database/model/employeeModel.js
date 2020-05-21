const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Employee",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    functional: {
      type: String,
      required: true,
    },
    register: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  })
);
