'use strict';
module.exports = (sequelize, DataTypes) => {
  var employees = sequelize.define('employees', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return employees;
};