const UsersModel = require("../../routes/users/dashboard");

const dashboard = (req,res,next)=>{
    res.send("dash");
}

module.exports = {dashboard};