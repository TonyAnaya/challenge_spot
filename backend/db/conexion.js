const Sequelize = require("sequelize");

const sql = new Sequelize('challenge','root',null,{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sql