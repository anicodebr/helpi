module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dt_nasc: {
        allowNull: true,
        type: DataTypes.DATEONLY,
      },
      cpf: {
        allowNull: true,
        type: DataTypes.STRING
      },
      tel: {
        allowNull: true,
        type: DataTypes.STRING
      },
      foto: {
        allowNull: true,
        type: DataTypes.BLOB
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });

    User.associate = function(models) {
      // associations can be defined here
      User.belongsTo(models.Entregador, {onDelete: 'RESTRICT'})
      User.belongsTo(models.Cliente, {onDelete: 'RESTRICT'})
      User.belongsTo(models.Admin, {onDelete: 'RESTRICT'})
    };
  
  return User;
}