var express = require('express');
var router = express.Router();
var cmd = require('node-cmd');

router.post('/', function(req, res, next) {

  cmd.get('pwd', function(data) {
    console.log('current dir',data);
  });

  cmd.run('cd /usr/share/nginx/html && git pull origin master');

  res.send('do git autoupdate');

});

module.exports = router;
