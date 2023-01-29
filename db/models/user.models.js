import { DataTypes } from 'sequelize';
import { sequelizeConnection } from './connection.js';

const userModel =  sequelizeConnection.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
     
        unique:true
    },
    password:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER
    }
},{
    timestamps:true
})
export default userModel;