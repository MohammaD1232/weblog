const express = require("express");

const { signup } = require("../../controllers/users/authController");

const Router = express.Router();

Router.get("/", signup);

module.exports.signup = Router;
