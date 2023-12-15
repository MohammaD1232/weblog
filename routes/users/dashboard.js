const express =require("express");
const Router = express.Router();

const {dashboard } = require("../../controllers/users/UsersController");
const  authenticate  = require("../../middlewares/auth");

Router.get("/",authenticate,dashboard);

module.exports.dashboard = Router;