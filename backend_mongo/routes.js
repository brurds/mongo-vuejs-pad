const express = require('express');
const routes = express.Router();
const EmployeeController= require('./controller/employee');
const employeeController = new EmployeeController();
const QuestionController = require('./controller/question');
const questionControler = new QuestionController();


routes.route("/employee")
    .get(employeeController.get())
    .post(employeeController.post());

routes.route("/employee/:id")
    .delete(employeeController.delete())
    .put(employeeController.put());
routes.route("/question")
    .get(questionControler.get())
    .post(questionControler.post());
routes.route("/question/:id")
    .delete(questionControler.delete())
    .put(questionControler.put());
module.exports = routes;