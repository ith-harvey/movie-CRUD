
var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('movies').select('*').then(movies => {
    // var movieStr = JSON.stringify(movies)
    res.render('movies/index', {
      movies
    });
  })
});

router.get('/new', function(req, res, next) {
    res.render('movies/new');
  })

router.post('/', function(req, res, next) {
  console.log('we are in the POST!!', req.body);

  let movie = {
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    my_rating: req.body.my_rating,
    poster_url: req.body.poster_url
  }
  console.log('movie obj', movie);
  db('movies').insert(movie).then(movie => {

    res.redirect('/movies/index');
  })
});

router.get('/:id', function(req, res, next) {
  db('movies').select('*').where('id', req.params.id).first().then(movie => {
    // var movieStr = JSON.stringify(movies)
    console.log(movie);
    console.log('req.params.id',req.params.id);
    res.render('movies/show', {
      movie
    });
  })
});

router.delete('/:id', function(req, res, next) {
  console.log('delete is firing');
  console.log('req.body.id',req.params.id);
  db('movies').select('*').del().where('id', req.params.id).then(movie => {
    console.log(movie);
    res.redirect('/movies');
  })
});

module.exports = router;
