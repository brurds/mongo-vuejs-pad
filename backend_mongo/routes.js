const express = require('express');
const routes = express.Router();
const EmployeeController= require('./controller/employee');
const employeeController = new EmployeeController();
const QuestionController = require('./controller/question');
const questionController = new QuestionController();
const TestController = require('./controller/test');
const testeController = new TestController();


routes.route("/employee")
    .get(employeeController.get())
    .post(employeeController.post());

routes.route("/employee/:id")
    .delete(employeeController.delete())
    .put(employeeController.put());

routes.route("/question")
    .get(questionController.get())
    .post(questionController.post());
routes.route("/question/:id")
    .delete(questionController.delete())
    .put(questionController.put());

routes.route("/test")
    .get(testeController.get())
    .post(testeController.post());
routes.route("/test/:id")
    .delete(testeController.delete())
    .put(testeController.put());

module.exports = routes;