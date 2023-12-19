const express =require("express");
const Router = express.Router();

const {dashboard,create_post } = require("../../controllers/users/UsersController");
const  authenticate  = require("../../middlewares/auth");

Router.get("/",authenticate,dashboard);
Router.get("/add-post",authenticate,create_post)

module.exports.create_post=Router;
module.exports.dashboard=Router;