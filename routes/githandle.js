var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {


  console.log('github request');
  console.log(req.data);

  res.send('do git autoupdate');

});

module.exports = router;
