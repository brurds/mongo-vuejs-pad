const QuestionCRUD = require("../database/questionCRUD");
const questionCRUD = new  QuestionCRUD();

class  QuestionController {
    get() {
        return questionCRUD.get();
    };
    post() {
        return questionCRUD.post();
    };
    delete() {
        return questionCRUD.delete();
    };
    put() {
        return questionCRUD.put();
    };
}

module.exports =  QuestionController;