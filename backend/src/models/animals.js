'use strict';
module.exports = (sequelize, DataTypes) => {
  var animals = sequelize.define('animals', {
    type: DataTypes.STRING,
    vaccines: DataTypes.STRING,
    age: DataTypes.INTEGER,
    history: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    size: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return animals;
};