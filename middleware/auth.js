function chackeUser(cookieName) {
  return (req, res, next) => {
    const token = req.cookies[cookieName];
    if (!token) {
      return res.redirect("/user/signin");
    }

    next();
  };
}

module.exports = chackeUser;