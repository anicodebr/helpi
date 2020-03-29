'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('Feedback', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    text: {
      type: DataTypes.TEXT
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
  Feedback.associate = function(models) {
    // associations can be defined here
    Feedback.hasMany(models.Pedido, {onDelete: 'RESTRICT'});
    Feedback.belongsTo(models.User, {onDelete: 'RESTRICT'});
  };
  return Feedback;
};