'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    end_id: DataTypes.INTEGER
  }, {});
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};