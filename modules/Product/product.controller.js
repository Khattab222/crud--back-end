
import productModel from './../../db/models/product.models.js';
import { Op } from 'sequelize';
import userModel from './../../db/models/user.models.js';




// get all product
export const getAll =async (req,res) => {
  try {
    const product = await productModel.findAll({});
    res.json({ message: "done", data: product });
  } catch (error) {
    res.json({ message: "fail", Error: error });
  }
}
// add product 
export const addProduct = async (req,res) => {
  try{
const product = await productModel.create(req.body);
res.json({message:'success', data:product});
  }catch (err){
    res.json({message:'fail',Error:err})
  }
}

// update product (product owner only)
export const updateProduct = async (req, res) => {
  try {
    const { pName, pDescription, price } = req.body;
    const {id,UserId} = req.params
 const product =  await productModel.update(
      { pName, pDescription, price },
      {
        where: {
          id,
          UserId
        },
      }
    );
    if (product[0]) {
      res.json({ message: "success",data:product });
    }
   
  } catch (err) {
    res.json({ message: "fail", Error: err });
  }
};


//// delete product(product owner only)
export const deleteProduct = async (req,res) => {
  try {
    const {prodId,UserId}= req.params;
 const prod =  await  productModel.destroy({
      where:{id:prodId,UserId}
    });
    if (prod) {
      res.json({message:"deleting success"})
    }else{
      res.json({message:"you can't delete this product"})

    }
  
  } catch (error) {
    res.json({message:'fail',Error:error})
  }
 
}

// search by name 
export const searchByName =async (req,res) => {
  const {name} = req.query;
 try {
  const products = await productModel.findAll({
    where:{
      pName:{
        [Op.startsWith]: name, 
      }
    }
  })
  if (products[0]) {
    res.json({message:'success', data:products})
  }else{
    res.json({message: 'no products match '})
  }
 } catch (error) {
  res.json({message:'fail', Error:error})
 }
}

//search for products where price greater than 3000.    
export const searchProducts = async (req,res) => {
console.log(req.query)
  try {
    const {price} = req.query;
    const products = await productModel.findAll({
      where:{
        price:{
          [Op.gt]:price
        }
      }
    })
    if (products) {
      res.json({message:'success', data : products})
    }else{
      res.json({message: 'no products match '})
    }
    
  } catch (error) {
    res.json({message:'fail' , Error:error})
  }
 
}


//get all product with their owners informaion(using include);
export const getAllWithOwner = async (req,res) => {
  try{
const allPro = await productModel.findAll({include:userModel});
if (allPro) {
  res.json({message:'success', data:allPro })
}else{
  res.json({message:'there is no product' })
}
  }catch(err){
    res.json({message:'fail', Error:err })
  }
}





