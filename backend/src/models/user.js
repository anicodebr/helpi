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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      dt_nasc: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING
      },
      tel: {
        allowNull: false,
        type: DataTypes.STRING
      }
    });

    User.associate = function(models) {
      // associations can be defined here
      User.belongsTo(models.Entregador)
      User.belongsTo(models.Cliente)
    };
  
  return User;
}