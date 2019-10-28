const Sequelize = require('sequelize');
const sequelize = new Sequelize('xiaofei','root','mysql123',{
    host:'47.104.191.170',
    dialect:'mysql',
    operatorsAliases:false,
    dialectOptions:{
        charset:'utf8mb4',
        supportBigNumbers:true,
        bigNumberStrings:true
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    timezone:'+08:00'
})
module.exports = {sequelize}