'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entregador = sequelize.define('Entregador', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    autorizado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    rg_frente: {
      type: DataTypes.BLOB
    },
    rg_tras: {
      type: DataTypes.BLOB
    },
    descricao: {
      type: DataTypes.TEXT
    },
    raio: {
      type: DataTypes.FLOAT
    },
    itemlimit: {
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
  Entregador.associate = function(models) {
    // associations can be defined here
  };
  return Entregador;
};