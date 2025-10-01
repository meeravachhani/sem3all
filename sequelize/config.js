const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("mm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
