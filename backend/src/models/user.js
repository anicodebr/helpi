module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      dt_nasc: DataTypes.DATEONLY,
      cpf: DataTypes.STRING,
      tel: DataTypes.STRING
    });

    Entregador.associate = function(models) {
      // associations can be defined here
      User.hasOne(models.Entregador);
      User.hasOne(models.Cliente);
    };
  
  return User;
}