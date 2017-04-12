
var express = require('express');
var router = express.Router();


router.get('/', (req,res,next)=> {
  res.render('index', {title: 'Ian/s Movie extravaganza' })
})

module.exports = router;
