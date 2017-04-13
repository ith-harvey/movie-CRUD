var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/:id', function(req, res, next) {
  db('movies').select('*').where('id', req.params.id).first().then(movie => {
    // var movieStr = JSON.stringify(movies)
    console.log(movie);
    console.log('req.params.id',req.params.id);
    res.render('movies/edit', {
      movie
    });
  })
});

router.put('/:id', function(req, res, next) {
  console.log('we are in the put!!', req.body);
  db('movies').update(req.body).where('id', req.params.id).then( () => {
    res.send('/movies')
  })
});



module.exports = router;
