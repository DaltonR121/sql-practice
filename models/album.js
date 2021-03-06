'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Album.init({
    albumName: DataTypes.STRING,
    released: DataTypes.INTEGER,
    bandID: DataTypes.INTEGER,
    labelID: DataTypes.INTEGER,
    genreID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
