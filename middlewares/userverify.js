const jwt = require('jsonwebtoken');

secret_code = 'iamwhoyoudontknow123'

function storeuser(_id, name, email) {
    return jwt.sign({_id:_id, name:name, email:email}, secret_code);
};

function verifyuser(token){
    return jwt.verify(token, secret_code);
};

module.exports = {
    storeuser, 
    verifyuser
};