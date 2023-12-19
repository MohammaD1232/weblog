const UsersModel = require("../../routes/users/dashboard");

const dashboard = (req,res,next)=>{
    res.render("users/dashboard/dashboard",{title:123});
}

const create_post = (req,res)=>{
    res.render("users/dashboard/add_post",{title:12});
}

module.exports = {dashboard,create_post};