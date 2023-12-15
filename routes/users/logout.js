const express = require("express");
const Router = express.Router();
const {logout} = require("../../controllers/users/authController");

Router.get("/",logout);

module.exports.logout = Router;