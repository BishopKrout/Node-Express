const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


// FIXES BUG #1
function createToken(username, admin=false) {
    let payload = { username, admin };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Adding expiration
  }

module.exports = createToken;
