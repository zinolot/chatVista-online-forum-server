// middlewares/verifyToken.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'Unauthorized access' });
  }

  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized access' });
    }

    req.decoded = decoded;
    next();
  });
};

module.exports = verifyToken;
