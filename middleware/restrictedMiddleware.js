const jwt = require('jsonwebtoken');

const jwtKey =
  process.env.JWT_SECRET || "mySecretKey"
  'add a .env file to root of project with the JWT_SECRET variable';

module.exports = {
    restricted,
  };
  
function restricted(req, res, next) {
  const token = localStorage.getItem(userToken); 

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, you cannot access this data.'
  })
  }
}