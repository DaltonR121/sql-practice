'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Bands', [
     { bandName: 'Periphery', yearFounded: 2005, genreID: 21, originCity: 'Washington', originState: 'DC', members: 'Misha Mansoor, Jake Bowen, Matt Halpern, Spencer Sotelo, Mark Holcomb', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Maroon 5', yearFounded: 1994, genreID: 24, originCity: 'Los Angeles', originState: 'CA', members: 'Adam Levine, Jesse Carmichael, James Valentine, Matt Flynn, PJ Morton, Sam Farrar', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Eminem', yearFounded: 1988, genreID: 13, originCity: 'Detroit', originState: 'MI', members: 'Marshall Bruce Mathers III', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Linkin Park', yearFounded: 1996, genreID: 1, originCity: 'Agoura Hills', originState: 'CA', members: 'Rob Bourdon, Brad Delson, Mike Shinoda, Dave Farrell, Joe Hahn', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Paramore', yearFounded: 2004, genreID: 1, originCity: 'Franklin', originState: 'TN', members: 'Hayley Williams, Zac Farro, Taylor York', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Red Hot Chili Peppers', yearFounded: 1983, genreID: 29, originCity: 'Los Angeles', originState: 'CA', members: 'Anthony Kiedis, Flea, Chad Smith, John Frusciante', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Tech N9ne', yearFounded: 1991, genreID: 13, originCity: 'Kansas City', originState: 'MO', members: 'Aaron Dontez Yates', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Metallica', yearFounded: 1981, genreID: 21, originCity: 'Los Angeles', originState: 'CA', members: 'James Hetfield, Lars Ulrich, Kirk Hammett, Robert Trujillo', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Foo Fighters', yearFounded: 1994, genreID: 29,  originCity: 'Seattle', originState: 'WA', members: 'Dave Grohl, Nate Mendel, Pat Smear, Taylor Hawkins, Chris Shiflett, Rami Jaffee', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'NSYNC', yearFounded: 2005, genreID: 24, originCity: 'Orlando', originState: 'FL', members: 'Justin Timberlake, JC Chasez, Chris Kirkpatrick, Joey Fatone, Lance Bass', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Saving Abel', yearFounded: 2004, genreID: 29, originCity: 'Corinth', originState: 'MS', members: 'Jared Weeks, Jason Null, Scott Bartlett, Scott Wilson, Dave Matthews', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Breaking Benjamin', yearFounded: 1999, genreID: 29, originCity: 'Wilkes-Barre', originState: 'PA', members: 'Benjamin Burnley, Aaron Bruch, Shaun Foist, Jasen Rauch, Keith Wallen', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'DMX', yearFounded: 1991, genreID: 13, originCity: 'Mount Vernon', originState: 'NY', members: 'Earl Simmons', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Beyonce', yearFounded: 1997, genreID: 13, originCity: 'Houston', originState: 'TX', members: 'Beyonce Giselle Knowles', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Dierks Bentley', yearFounded: 2001, genreID: 8, originCity: 'Phoenix', originState: 'AZ', members: 'Frederick Dierks Bentley', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Garth Brooks', yearFounded: 1985, genreID: 8, originCity: 'Tulsa', originState: 'OK', members: 'Troyal Garth Brooks', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Halsey', yearFounded: 2012, genreID: 24, originCity: 'Edison', originState: 'NJ', members: 'Ashley Nicolette Frangipane', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Alanis Morissette', yearFounded: 1986, genreID: 24, originCity: 'Ottawa', originState: 'Ontario', members: 'Alanis Nadine Morissette', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Dua Lipa', yearFounded: 2014, genreID: 24, originCity: 'London', originState: 'England', members: 'Dua Lipa', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Goo Goo Dolls', yearFounded: 1986, genreID: 1, originCity: 'Buffalo', originState: 'NY', members: 'John Rzeznik, Robby Takac', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Journey', yearFounded: 1973, genreID: 29, originCity: 'San Francisco', originState: 'CA', members: 'Neal Schon, Jonathan Cain, Randy Jackson, Deen Castronovo, Arnel Pineda, Jason Derlatka, Narada Michael Walden', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'Toto', yearFounded: 1977, genreID: 29, originCity: 'Van Nuys', originState: 'CA', members: 'Steve Lukather, David Paich, Joseph Williams', createdAt: new Date(), updatedAt: new Date() },
     { bandName: 'The Contortionist', yearFounded: 2007, genreID: 26, originCity: 'Indianapolis', originState: 'ID', members: 'Joey Baca, Robby Baca, Cameron Maynard, Mike Lessard, Jordan Eberhardt, Eric Guenther', createdAt: new Date(), updatedAt: new Date() },
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
