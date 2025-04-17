const jwt = require('jsonwebtoken');

secret_code = 'iamwhoyoudontknow123'

function storeuser(_id, name, email) {
    return jwt.sign({_id:_id, name:name, email:email}, secret_code);
};

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const decoded = jwt.verify(token, secret_code);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Unauthorized' });
    }
  };

module.exports = {
    storeuser, 
    verifyToken
};