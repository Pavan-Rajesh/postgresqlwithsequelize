const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.POSTGRESQLURL);
module.exports = sequelize;
