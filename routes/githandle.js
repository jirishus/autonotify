var express = require('express');
var router = express.Router();
var cmd = require('node-cmd');

router.post('/', function(req, res, next) {

  cmd.get('pwd', function(data) {
    console.log('current dir',data);
  });

  cmd.get(
        'll',
        function(data){
            console.log('the current dir contains these files :\n\n',data)
            process.stdout.write(data);
        }
    );

  // cmd.run('cd /usr/share/nginx/html && sudo git pull origin master');
  cmd.run('cd /usr/share/nginx/html && sudo git pull origin master', function(data) {
    console.log('echo' + data);
  });

});

module.exports = router;
