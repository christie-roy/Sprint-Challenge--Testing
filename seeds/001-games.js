
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Pacman', genre: 'Arcade', releaseYear: 1980},
        {title: 'Super Marios Bros', genre: 'Awesome', releaseYear: 1990},
        {title: 'Mario Kart Wii', genre: 'Wii Racing', releaseYear: 2005}
      ]);
    });
};
