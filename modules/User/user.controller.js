import { Op } from "sequelize";
import userModel from "./../../db/models/user.models.js";

// get all users
const getuser = async (req, res) => {
  try {
    const users = await userModel.findAll({});
    res.json({ message: "done", data: users });
  } catch (error) {
    res.json({ message: "fail", Error: error });
  }
};

// add user
const adduser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.json({ message: "success",data: user });
  } catch (error) {
    res.json({ message: "Catch err", error: error });
  }
};

// login 
const login = async (req,res) => {
  try {
    const {email,password}= req.body;
    const user = await userModel.findOne({
      where:{
        email,
        password
      }
    });
    if (user) {
      res.json({message:'success', data:user});
      
    }else{
      res.json({message:'invalid email or password'})
    }
  } catch (error) {
    res.json({message:'error', Error:error})
  }
}


// update user
const updateUser = async (req, res) => {
  try {
    const { id, name, email, password, age } = req.body;
  await userModel.update(
      { name, email, password, age },
      {
        where: {
          id,
        },
      }
    );
    res.json({ messgae: "success" });
  } catch (err) {
    res.json({ message: "fail", Error: err });
  }
};

// delete user
const deleteUser = async (req,res) => {
  try {
    const {id}= req.body;
  await  userModel.destroy({
      where:{id}
    })
    res.json({message:"success"})
  } catch (error) {
    res.json({message:'fail',Error:error})
  }
 
}



//search for user where his name start with "a" and age less than 30 => using like for 
const searchUser = async (req,res) => {

  try {
    const {name,age} = req.body;
    const user = await userModel.findAll({
      where:{
        name:{
          [Op.like]:'a%'
        },
        age:{
          [Op.lt]:30
        }
      }
    })
    if (user) {
      res.json({message:'success', data : user})
    }else{
      res.json({message: 'no user match '})
    }
    
  } catch (error) {
    res.json({message:'fail' , Error:error})
  }
 
}



//search for users by list of ids => using IN
const searchbyListId = async (req,res) => {
  try{
    const {id}= req.query
const listOfUsers = await userModel.findAll({
  where:{
    id:{
      [Op.in]: [3,4,5]
    }
  }
})
if (listOfUsers) {
  
  res.json({message:'success', data:listOfUsers});
}else{
  res.json({message:'no user match '});

}
  }catch(err){
res.json({message:'fail' , Error:err})
  }
}



export { getuser, adduser, updateUser,deleteUser,searchUser,searchbyListId,login };
