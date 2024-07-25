const jwt = require("jsonwebtoken");

const secret = "@hotel@";

function createTokeForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    password: user.password,
  };

  const token = jwt.sign(payload, secret);
  return token;
}

function validetToken(token) {
  const payload = jwt.verify(token, secret);
  return payload;
}

module.exports = {
  createTokeForUser,
  validetToken,
};
