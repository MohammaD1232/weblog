const express = require("express");

const { signin } = require("../../controllers/users/authController");

const Router = express.Router();

Router.get("/", signin);

module.exports.signin = Router;
