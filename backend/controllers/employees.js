

module.exports = function(app){
    app.get('/employees', function (req, resp) {
        console.log('recebida requisição')
        resp.send('OK.');
    });

    app.post('/employees/employee', function(req,resp){
        var employee = req.body;
        console.log("Processando cadastro");
        console.log(employee);

        employee.status = 'CRIADO';
        employee.data = new Date;

        var connection = app.datebase.connectionFactory();
        var employeeDao = new app.datebase.EmployeeDao(connection);
        employeeDao.save(employee, function(err, result){
            console.log('employee cadastrado')
            resp.json(employee);

        });

        resp.send(employee);

    })

}
