'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bandName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      yearFounded: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      genreID: {
        allowNull: false,
        type: Sequelize.STRING
      },
      originCity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      originState: {
        allowNull: false,
        type: Sequelize.STRING
      },
      members: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bands');
  }
};
