const { validetToken } = require("../services/authentication");

function chackeForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookiesvalue = req.cookies[cookieName];

    if (!tokenCookiesvalue) {
      return next();
    }

    try {
      const userPayload = validetToken(tokenCookiesvalue);
      req.user = userPayload;
    } catch (err) {
      console.log("err");
    }

    return next();
  };
}

module.exports = {
  chackeForAuthenticationCookie,
};
