const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the "Bearer TOKEN" format

  if (token == null) return res.sendStatus(401); // If no token, unauthorized

  jwt.verify(token, process.env.key, (err, decodedUser) => {
    if (err) return res.sendStatus(403); // If token is invalid or expired, forbidden
    req.user = decodedUser.user; // Attach user data to the request object
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = authenticateToken;
