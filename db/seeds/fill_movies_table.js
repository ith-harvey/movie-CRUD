
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
        id: 1,
        title: 'Speed 2 : Cruise Control',
        director: 'salvador dali',
        year: 1997,
        my_rating: 3,
        poster_url:'http://www.brokenURL.com'
        },
        {
        id: 2,
        title: 'Jungle Book',
        director: 'salvador dali',
        year: 1991,
        my_rating: 9,
        poster_url: 'http://www.brokenURL.com'
        },
        {
        id: 3,
        title: 'Dumber and dumber',
        director: 'Tom Hanks',
        year: 1995,
        my_rating: 2,
        poster_url: 'http://www.brokenURL.com'
        }
      ]);
    }).then(() => {
      return knex.raw (
        "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies))"
      )
    });
};
