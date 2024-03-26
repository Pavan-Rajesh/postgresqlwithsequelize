const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const ZUser = sequelize.define("ZUser", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      not: ["^[a-z]+$", "i"],
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
    },
  },
});
module.exports = ZUser;
