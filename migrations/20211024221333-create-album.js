'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      albumName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      released: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bandID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      labelID: {
        allowNull: false,
        type: Sequelize.STRING
      },
      genreID: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Albums');
  }
};
