module.exports = function(app)
{
    var Emp = require('../controllers/EmpController');
    app.route('/getEmployees')
        .get(Emp.getEmployee);
    app.route('/addEmployee')
        .post(Emp.addEmployee);
    app.route('/updateEmployee')
        .patch(Emp.updateEmployee);
    app.route('/deleteEmployee')
        .post(Emp.deleteEmployee);
}