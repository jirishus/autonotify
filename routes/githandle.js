var express = require('express');
var router = express.Router();
var cmd = require('node-cmd');

router.post('/', function(req, res, next) {

  cmd.get('pwd', function(data) {
    console.log('current dir',data);
  });

  cmd.get(
        'ls',
        function(data){
            console.log('the current dir contains these files :\n\n',data)
        }
    );

  // cmd.run('cd /usr/share/nginx/html && sudo git pull origin master');
  cmd.run('cd /usr/share/nginx/html && sudo git pull origin master', function(data) {
    console.log('echo' + data);
  });

  res.send('do git autoupdate');

});

module.exports = router;
