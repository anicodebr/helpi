'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entregador = sequelize.define('Entregador', {
    foto: DataTypes.BLOB,
    descricao: DataTypes.TEXT,
    raio: DataTypes.FLOAT,
    itemlimit: DataTypes.INTEGER
  }, {});
  Entregador.associate = function(models) {
    // associations can be defined here
  };
  return Entregador;
};