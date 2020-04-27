const EmployessCRUD = require("../database/employeeCRUD");
const employessCRUD = new EmployessCRUD();

class EmployeeController {
    get() {
        return employessCRUD.get();
    };
    post() {
        return employessCRUD.post();
    };
    delete() {
        return employessCRUD.delete();
    };
    put() {
        return employessCRUD.put();
    };
}

module.exports = EmployeeController;
