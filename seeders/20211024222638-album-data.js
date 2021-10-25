'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums', [
      { albumName: 'Songs About Jane', released: 2002, bandID: 2, labelID: 5, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'It Won\'t Be Soon Before Long', released: 2007, bandID: 2, labelID: 5, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Hands All Over', released: 2010, bandID: 2, labelID: 5, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'The Marshall Mathers LP', released: 2000, bandID: 3, labelID: 6, genreID: 13, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'The Eminem Show', released: 2002, bandID: 3, labelID: 6, genreID: 13, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Hybrid Theory', released: 2000, bandID: 4, labelID: 7, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Meteora', released: 2003, bandID: 4, labelID: 7, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Minutes to Midnight', released: 2007, bandID: 4, labelID: 7, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'All We Know Is Falling', released: 2005, bandID: 5, labelID: 8, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Riot!', released: 2007, bandID: 5, labelID: 8, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Brand New Eyes', released: 2009, bandID: 5, labelID: 8, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Blood Sugar Sex Magik', released: 1991, bandID: 6, labelID: 7, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Californication', released: 1999, bandID: 6, labelID: 7, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'By the Way', released: 2002, bandID: 6, labelID: 7, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'The Storm', released: 2016, bandID: 7, labelID: 9, genreID: 13, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Kill \'Em All', released: 1983, bandID: 8, labelID: 10, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Ride the Lightning', released: 1984, bandID: 8, labelID: 10, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Master of Puppets', released: 1986, bandID: 8, labelID: 11, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: '...And Justice for All', released: 1988, bandID: 8, labelID: 11, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Metallica', released: 1991, bandID: 8, labelID: 11, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'The Colour and the Shape', released: 1997, bandID: 9, labelID: 12, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'One by One', released: 2002, bandID: 9, labelID: 12, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'In Your Honor', released: 2005, bandID: 9, labelID: 12, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: '\'N Sync', released: 1997, bandID: 10, labelID: 13, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'No Strings Attached', released: 2000, bandID: 10, labelID: 14, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Saving Abel', released: 2008, bandID: 11, labelID: 15, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'We Are Not Alone', released: 2004, bandID: 12, labelID: 16, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Phobia', released: 2006, bandID: 12, labelID: 16, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Dear Agony', released: 2009, bandID: 12, labelID: 16, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'It\'s Dark and Hell Is Hot', released: 1998, bandID: 13, labelID: 17, genreID: 13, createdAt: new Date(), updatedAt: new Date() },
      { albumName: '... And Then There Was X', released: 1999, bandID: 13, labelID: 17, genreID: 13, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Dangerously in Love', released: 2003, bandID: 14, labelID: 18, genreID: 27, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'I Am... Sasha Fierce', released: 2008, bandID: 14, labelID: 18, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Dierks Bentley', released: 2003, bandID: 15, labelID: 19, genreID: 8, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Modern Day Drifter', released: 2005, bandID: 15, labelID: 19, genreID: 8, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Garth Brooks', released: 1989, bandID: 16, labelID: 19, genreID: 8, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'No Fences', released: 1990, bandID: 16, labelID: 19, genreID: 8, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Ropin\' the Wind', released: 1991, bandID: 16, labelID: 19, genreID: 8, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'The Chase', released: 1992, bandID: 16, labelID: 20, genreID: 8, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'In Pieces', released: 1993, bandID: 16, labelID: 20, genreID: 8, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Sevens', released: 1997, bandID: 16, labelID: 19, genreID: 8, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Hopeless Fountain Kingdom', released: 2017, bandID: 17, labelID: 21, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Manic', released: 2020, bandID: 17, labelID: 4, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Jagged Little Pill', released: 1995, bandID: 18, labelID: 22, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Dua Lipa', released: 2017, bandID: 19, labelID: 7, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Future Nostalgia', released: 2020, bandID: 19, labelID: 23, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'A Boy Named Goo', released: 1995, bandID: 20, labelID: 7, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Dizzy Up the Girl', released: 1998, bandID: 20, labelID: 7, genreID: 24, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Departure', released: 1980, bandID: 21, labelID: 18, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Escape', released: 1981, bandID: 21, labelID: 18, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Frontiers', released: 1983, bandID: 21, labelID: 18, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Toto', released: 1978, bandID: 22, labelID: 18, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Toto IV', released: 1982, bandID: 22, labelID: 18, genreID: 29, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Language', released: 2014, bandID: 23, labelID: 24, genreID: 26, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Periphery', released: 2010, bandID: 1, labelID: 2, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Periphery II: This Time It\'s Personal', released: 2012, bandID: 1, labelID: 2, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Clear', released: 2014, bandID: 1, labelID: 2, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Juggernaut: Alpha', released: 2015, bandID: 1, labelID: 2, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Juggernaut: Omega', released: 2015, bandID: 1, labelID: 2, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Periphery III: Select Difficulty', released: 2016, bandID: 1, labelID: 2, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
      { albumName: 'Periphery IV: Hail Stan', released: 2019, bandID: 1, labelID: 2, genreID: 21, createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Albums', null, {});
  }
};
