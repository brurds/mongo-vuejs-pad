const employeeModel = require("./model/employeeModel");
const connection = require("./connection");

connection();

class EmployeeCRUD {
    get() {
        return function (req, res) {
            employeeModel
                .find()
                .then((listAll) => res.send(listAll))
                .catch((err) => res.send(err));
        }
    };
    post() {
        return function (req, res) {
            let employee = new employeeModel(req.body);
            console.log(req.body);
            employee.save()
                .then(() => res.send(employee))
                .catch((err) => res.send(err));
        }
    };
    delete() {
        return function (req, res) {
            let id = req.params.id;
            employeeModel
                .deleteOne({ _id: id })
                .then(() => res.send("Removed"))
                .catch((error) => res.send(error));
        }
    };
    put() {
        return function (req, res) {
            let id = req.params.id;
            employeeModel
                .updateOne({ _id: id }, req.body)
                .then(() => res.send('update'))
                .catch((error) => res.send(error));
        }
    };
}

module.exports = EmployeeCRUD;