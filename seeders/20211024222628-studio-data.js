'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Studios', [
      { name: 'Alternative', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Anime', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Blues', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Children\'s Music', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Classical', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Comedy', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Commercial', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Country', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dance', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Easy Listening', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Electronic', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Folk', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hip-hop/Rap', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Holiday', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Indie-Pop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Industrial', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inspirational - Christian & Gospel', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Instrumental', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jazz', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Latin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Metal', createdAt: new Date(), updatedAt: new Date() },
      { name: 'New Age', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Opera', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Post-Disco', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Progressive', createdAt: new Date(), updatedAt: new Date() },
      { name: 'R&B/Soul', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Reggae', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rock', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Singer/Songwriter', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Soundtrack', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Spoken Word', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vocal', createdAt: new Date(), updatedAt: new Date() },
      { name: 'World', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
