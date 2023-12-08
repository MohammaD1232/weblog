const express = require("express");
const {index} = require("../controllers/indexController");

const Router = express.Router();

Router.get("/",index);

module.exports = Router;