'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Labels', [
      { name: '3DOT Recordings', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sumerian Records', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Roadrunner Records', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Capitol Records', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Octone', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Aftermath', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Warner Bros.', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fueled By Ramen', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Strange Music', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Megaforce', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Elektra', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Roswell', createdAt: new Date(), updatedAt: new Date() },
      { name: 'RCA', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jive', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Virgin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hollywood', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ruff Ryders', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Columbia', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Capitol Nashville', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Liberty', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Astralwerks', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Maverick', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Warner', createdAt: new Date(), updatedAt: new Date() },
      { name: 'eOne', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Labels', null, {});
  }
};
