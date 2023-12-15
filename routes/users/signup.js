const express = require("express");

const { signup,dosignup } = require("../../controllers/users/authController");
const  authenticate  = require("../../middlewares/auth");

const Router = express.Router();

Router.get("/", signup);
Router.post("/",dosignup);

module.exports.signup = Router;
