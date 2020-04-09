function EmployeeDao(connection){
    this._connection = connection;
}

EmployeeDao.prototype.save = function(employee, callback){
    this._connection.query('INSERT INTO employees SET ?', employee, callback);
}
EmployeeDao.prototype.list = function(callback){
    this._connection.query('SELECT * FROM employees ',callback);
}
EmployeeDao.prototype.findID = function(callback){
    this._connection.query('SELECT *FROM employees WHERE id =?',[id],callback);
}