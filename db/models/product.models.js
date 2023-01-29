import { DataTypes } from "sequelize";
import { sequelizeConnection } from "./connection.js";
import userModel from "./user.models.js";

const productModel = sequelizeConnection.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    pDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

userModel.hasMany(productModel, {
//   foreignKey: "createdBy",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
productModel.belongsTo(userModel);
export default productModel;
