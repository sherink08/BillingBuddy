module.exports = function(app)
{
    var Reg =  require('../controllers/User');
    app.route('/Register')
        .post(Reg.RegisterUser);
    app.route('/Cr')
        .post(Reg.crypt);

}