module.exports = function(app)
{
    var Reg =  require('../controllers/Registration');
    app.route('/Register')
        .post(Reg.RegisterUser);
}