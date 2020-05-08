const questionModel = require("./model/questionModel");

class QuestionCRUD {
  get() {
    return function (req, res) {
      questionModel
        .find()
        .then((listAll) => res.send(listAll))
        .catch((err) => res.send(err));
    };
  }
  post() {
    return function (req, res) {
      let question = new questionModel(req.body);
      question
        .save()
        .then(() => {
          res.send(question).status(201);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    };
  }
  delete() {
    return function (req, res) {
      let id = req.params.id;
      questionModel
        .deleteOne({ _id: id })
        .then(() => res.send("Removed"))
        .catch((error) => res.send(error));
    };
  }
  put() {
    return function (req, res) {
      let id = req.params.id;
      questionModel
        .updateOne({ _id: id }, req.body)
        .then(() => {
          res.send("update").status(202);
        })
        .catch((error) => {
          res.send(error).status(400);
        });
    };
  }
}

module.exports = QuestionCRUD;
