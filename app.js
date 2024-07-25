const express = require("express");
const path = require("path");
const mongooes = require("mongoose");
const cookieParser = require("cookie-parser");

// routs
const userRoutes = require("./routes/user");
const hotelRoutes = require("./routes/hotel")

const {
  chackeForAuthenticationCookie,
} = require("./middleware/authentication");

const chackeUser = require("./middleware/auth")


const app = express();
const PORT = process.env.PORT || 8000;

const mogo_path = "mongodb://localhost:27017/Hotel";

mongooes
  .connect(mogo_path)
  .then(() => {
    console.log("mongo Connected!");
  })
  .catch((e) => {
    console.log(e);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));
//middleware for the data that porvied by user from thr frontend

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(chackeForAuthenticationCookie("token"));


app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user", userRoutes);
app.use("/hotel",chackeUser("token"), hotelRoutes);

app.listen(PORT, () => {
  console.log("Server started!", PORT);
});
