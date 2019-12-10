module.exports = function(app)
{
    var Reg =  require('../controllers/User');
    var Room = require('../controllers/Room');

    app.route('/Register')
        .post(Reg.RegisterUser);
    app.route('/Cr')
        .post(Reg.crypt);
    app.route('/Login')
        .post(Reg.login);
    app.route('/Users')
        .get(Reg.getUsers);
    app.route('/createRoom')
        .post(Room.CreateRoom);
    app.route('/getRoomList')
        .post(Room.getRooms);
}