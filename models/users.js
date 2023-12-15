const {Sequelize,DataTypes} = require("sequelize");
const bcrypt = require("bcrypt");

const {sequelize} = require("../libs/db");

//Users Schema

const users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Ensure the email format is valid
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rememberMe: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  profile: {
    type: DataTypes.STRING,
  },
  about: {
    type: DataTypes.TEXT,
  },
  registrationDate: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  lastLogin: {
    type: DataTypes.DATE,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  role: {
    type: DataTypes.ENUM("user", "admin"),
    defaultValue: "user",
  }
});

module.exports = users;
