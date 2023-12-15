const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("weblog", "root", "1234", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
});


sequelize.authenticate().then(()=>{
    console.log("Connection has been established successfully.");
}).catch(err=>{
    console.log(err);
});

module.exports = { sequelize };
