import {Sequelize} from 'sequelize';




export const sequelizeConnection = new Sequelize('sequelizedb', 'root', '', {
    host: 'localhost',
    dialect:  'mysql',

  });

 export const connectionDb =async () => {
    return await sequelizeConnection.sync({alter:true, force:false})
    .then(res => console.log("DB connected....."))
    .catch(err =>console.log({message : "faill", error:err}))
  }
  