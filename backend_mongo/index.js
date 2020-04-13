const express = require("express");
const connection = require("./database/connection");
const employeeModel = require("./database/model/employeeModel");
const bodyParser = require("body-parser");

connection();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/employee", function (req, res) {
  employeeModel
    .find()
    .then(function (listallEmployee) {
      res.send(listallEmployee);
    })
    .catch(function (err) {
      console.log(err);
      res.send(err);
    });
});

app.post("/employee", function (req, res) {
  let employee = new employeeModel(req.body);
  employee.save()
    .then(() => res.send(employee))
    .catch((err) => {
      res.send(err);
      console.log(err);
    });

});

app.delete("/employee/:id", function (req, res) {
  let id = req.params.id;
  employeeModel
    .deleteOne({ _id: id })
    .then(() => res.send("Removed"))
    .catch(function (err) {
      console.log(err);
      res.send(err);
    });
});

app.put("/employee/:id", function (req, res) {
  let id = req.params.id;
  employeeModel
    .updateOne({ _id: id }, req.body)
    .then(() => res.send('update'))
    .catch(function (err) {
      console.log(err);
      res.send(err);
    });
});

app.listen(3000, () => console.log("Runnning"));
