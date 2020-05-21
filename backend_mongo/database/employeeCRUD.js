const employeeModel = require("./model/employeeModel");

class EmployeeCRUD {
  get() {
    return function (req, res) {
      employeeModel
        .find()
        .then((listAll) => res.send(listAll))
        .catch((err) => res.send(err));
    };
  }
  getOne() {
    return function (req, res) {
      let id = req.params.id;
      employeeModel
        .findById({ _id: id })
        .then((listAll) => res.send(listAll))
        .catch((err) => res.send(err));
    };
  }
  post() {
    return function (req, res) {
      let employee = new employeeModel(req.body);
      employee
        .save()
        .then(() => {
          res.send(employee).status(201);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    };
  }
  delete() {
    return function (req, res) {
      let id = req.params.id;
      employeeModel
        .deleteOne({ _id: id })
        .then(() => res.send("Removed"))
        .catch((error) => res.send(error));
    };
  }
  put() {
    return function (req, res) {
      let id = req.params.id;
      employeeModel
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

module.exports = EmployeeCRUD;
