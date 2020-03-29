'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    itens: {
        type: DataTypes.JSON,
        allowNull: true
    },
    data_abertura: {
        type: DataTypes.DATE
    },
    views:{
        type: DataTypes.INTEGER
    },
    status:{
        type: DataTypes.INTEGER 
        //0 - Espera, 1 - Ativo, 2 - Capitalizando, 3 - Em rota, 4 - Cancelado, 5 - Finalizado
    },
    rating_c: {//Nota do cliente, 0 a 10
        type: DataTypes.INTEGER
    },
    rating_e: { //Nota do entregador, 0 a 10
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
  Pedido.associate = function(models) {
    // associations can be defined here
    Pedido.belongsTo(models.Entregador, {onDelete: 'RESTRICT'})
    Pedido.belongsTo(models.Cliente,    {onDelete: 'RESTRICT'})
  };
  return Pedido;
};