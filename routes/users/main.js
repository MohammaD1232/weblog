const { signin } = require("./signin");
const { signup } = require("./signup");
const { dashboard,create_post } = require("./dashboard");
const { logout } = require("./logout");


module.exports = { signin, signup ,dashboard ,logout,create_post};
