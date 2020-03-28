'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([
        queryInterface.addColumn('Users', 'dt_nasc', {
          type: Sequelize.DataTypes.DATEONLY
        }),
        queryInterface.addColumn('Users', 'cpf', {
          type: Sequelize.DataTypes.STRING
        }),
        queryInterface.addColumn('Users', 'tel', {
          type: Sequelize.DataTypes.STRING
        }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
