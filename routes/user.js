const { Router } = require("express");
const User = require("../models/user");
const { createTokeForUser } = require("../services/authentication");
const router = Router();

router.get("/register", (req, res) => {
  return res.render("register");
});

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.post("/register", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  // console.log("Registertion ", req.body);

  // if (password !== confirmpassword) {
  //   console.log("in this if of user")
  //   return res.render("register", {
  //     Error: "password Not match",
  //   });
  // }

  await User.create({
    name,
    email,
    password,
  });

  const token = await createTokeForUser(User);
  return res.cookie("token", token).redirect("/");
});

router.post("/signin", async (req, res) => {
  // console.log("post : signin", req.body);
  const { email, password } = req.body;
  // console.log("post :", email, password);

  try {
    const token = await User.matchPasswordAndGeneratToken(email, password);
    // console.log(token);
    return res.cookie("token", token).redirect("/");
  } catch (e) {
    console.log("password is worng");
    return res.redirect("/user/signin");
  }
});

module.exports = router;
