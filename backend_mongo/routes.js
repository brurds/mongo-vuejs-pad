const EmployeeControlador = require('./controller/employee');
const controller = new EmployeeControlador();
const express = require('express');
const routes = express.Router();


routes.route("/employee")
    .get(controller.get())
    .post(controller.post());

routes.route("/employee/:id")
    .delete(controller.delete())
    .put(controller.put());

module.exports = routes;