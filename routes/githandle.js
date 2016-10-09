var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {


  console.log('github request');
  console.log(req.body);

  res.send('do git autoupdate');

});

module.exports = router;
