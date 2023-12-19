const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const express_session = require("express-session");
const passport = require("passport");
const express_flash = require("express-flash");
//Libs
const db = require("./libs/db");

const app = express();


app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/users/main");

app.use(express_flash())
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", indexRouter);

// Passport Configuration
require("./libs/passport");


const secret = "asdj0q[wihdjcqw[indwq[indw0idhd[01232183312-=0";
const cookieOption = {
  path: "/",
  httpOnly: true,
  secure: false,
  maxAge: 3600000,
};

app.use(
  express_session({
    secret: secret,
    cookie: cookieOption,
    resave: false,
    saveUninitialized: true,
  })
);
// Passport
app.use(passport.initialize());
app.use(passport.session());

//Users Authentication Routes
app.use("/users/signin", authRouter.signin);
app.use("/users/signup", authRouter.signup);
app.use("/users/logout",authRouter.logout);
//Users dashboard
app.use("/dashboard", authRouter.dashboard);
app.use("/dashboard/add-post", authRouter.create_post);

//Not Found Route
app.use((req, res, next) => {
  res.status(404).send("404");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
