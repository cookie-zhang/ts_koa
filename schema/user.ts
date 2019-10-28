const moment = require('moment');
import { Sequelize } from 'Sequelize'
module.exports=(sequelize:Sequelize,DataTypes:any)=>{
    return sequelize.define('xiaofei',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'name'
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false,
            field:'age'
        },
        createdAt:{
            type:DataTypes.DATE,
            get(this:any){
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedAt:{
            type:DataTypes.DATE,
            get(this:any){
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
    },{
        freezeTableName:true,
    })
}
