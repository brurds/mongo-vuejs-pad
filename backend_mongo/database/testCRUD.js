const testModel = require("./model/testModel");

class TestCRUD {
  get() {
    return function (req, res) {
      testModel
        .find()
        .then((listAll) => res.send(listAll))
        .catch((err) => res.send(err));
    };
  }
  post() {
    return function (req, res) {
      let test = new testModel(req.body);
      debugger;
      test
        .save()
        .then(() => {
          res.send(test).status(201);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    };
  }
  delete() {
    return function (req, res) {
      let id = req.params.id;
      testModel
        .deleteOne({ _id: id })
        .then(() => res.send("Removed"))
        .catch((error) => res.send(error));
    };
  }
  put() {
    return function (req, res) {
      let id = req.params.id;
      testModel
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

module.exports = TestCRUD;
