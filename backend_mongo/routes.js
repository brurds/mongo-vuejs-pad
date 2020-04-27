const EmployeeController= require('./controller/employee');
const employeeController = new EmployeeController();
const express = require('express');
const routes = express.Router();


routes.route("/employee")
    .get(employeeController.get())
    .post(employeeController.post());

routes.route("/employee/:id")
    .delete(employeeController.delete())
    .put(employeeController.put());

module.exports = routes;