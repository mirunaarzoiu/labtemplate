'use strict';
module.exports = (sequelize, DataTypes) => {
  var vets = sequelize.define('vets', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    clinic: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return vets;
};