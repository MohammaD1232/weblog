const bcrypt = require("bcrypt");
const UsersModel = require("../../models/users");
const passport = require("passport");

const handleLogin = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/signin",
    failureFlash: "email or passowrd is incorrect",
  })(req, res, next);
};

const signin = (req, res,next) => {
  if(req.isAuthenticated()){
    return res.redirect("/dashboard");
  }
  return res.render("users/auth/signin", {
    title: "Sign In",
    msg: req.flash("error"),
  });
};

const dosignin = async (req, res, next) => {
  try {
    let { email, password, remember_me } = req.body;
    const user = await UsersModel.findOne({ where: { email } });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        req.session.userId = user.id;
        req.session.email = user.email;
        req.session.rememberMe = user.remember_me;
        res.redirect("/dashboard");
      } else {
        req.session.passwordErr = "Password or email do not match";
        res.redirect("/users/signin");
        return;
      }
    } else {
      req.session.passwordErr = "Password or email do not match";
      res.redirect("/users/signin");
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

const signup = (req, res, next) => {
  if(req.isAuthenticated()){
    return res.redirect("/dashboard");
  }
  res.render("users/auth/signup", {
    title: "Sign Up",
    msg: req.session.passwordErr,
  });
};

const dosignup = async (req, res, next) => {
  try {
    let { email, password, confirm_password, remember_me } = req.body;

    //Check if user clicked on remember_me checkbox
    remember_me = typeof remember_me === "undefined" ? 0 : 1;

    // Checking User avalibality
    const user = await UsersModel.findOne({ where: { email } });
    if (user) {
      req.session.passwordErr = "Email already exists";
      res.redirect("/users/signup");
      return;
    }

    //Encrypting Password
    if (password == confirm_password) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
    } else {
      req.session.passwordErr = "Passwords do not match";
      res.redirect("/users/signup");
      return;
    }
    //Creating user
    await UsersModel.create({
      email,
      password,
      confirm_password,
      rememberMe: remember_me,
    });
    res.status(201).redirect("/dashboard");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

const logout = (req, res) => {
  if(!req.isAuthenticated()){
    return res.redirect("/users/signin");
  }
  req.logout((err)=>{
    if(err){
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
    return res.redirect("/users/signin");
  });
};

module.exports = { signin, signup, logout, dosignup, dosignin , handleLogin };
