'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    end_id: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};