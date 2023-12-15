const express = require("express");

const { signin,dosignin, handleLogin } = require("../../controllers/users/authController");
const Router = express.Router();
const authenticate  = require("../../middlewares/auth");

Router.get("/", signin);
Router.post("/",handleLogin);

module.exports.signin = Router;
