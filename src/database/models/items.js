'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Items.init({
    titulo: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    descripcion: DataTypes.STRING,
    foto: DataTypes.STRING,
    idMenu: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};