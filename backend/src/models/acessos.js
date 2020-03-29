'use strict';
module.exports = (sequelize, DataTypes) => {
  const Acessos = sequelize.define('Acessos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Acessos.associate = function(models) {
    // associations can be defined here
    Acessos.belongsTo(models.User)
  };
  return Acessos;
};