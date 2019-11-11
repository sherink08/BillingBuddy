const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

exports.encrypt = function(data)
{
    return cryptr.encrypt(data);
}
exports.decrypt = function(data)
{
    return cryptr.decrypt(data);
}