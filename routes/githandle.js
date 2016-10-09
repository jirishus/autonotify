var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/githandle', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  res.send('do git autoupdate');

});

module.exports = router;
