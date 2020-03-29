'use strict';
module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define('Endereco', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    endereco: {
      type: DataTypes.STRING
    },
    numero: {
      type: DataTypes.INTEGER
    },
    cep: {
      type: DataTypes.STRING
    },
    referencia: {
      type: DataTypes.STRING
    },
    complemento: {
      type: DataTypes.STRING
    },
    uf: {
      type: DataTypes.STRING
    },
    bairro: {
      type: DataTypes.STRING
    },
    cidade: {
      type: DataTypes.STRING
    },
    pais: {
      type: DataTypes.STRING
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
  
  Endereco.associate = function(models) {
    // associations can be defined here
    Endereco.hasMany(models.Cliente, {onDelete: 'RESTRICT'});
  };
  return Endereco;
};