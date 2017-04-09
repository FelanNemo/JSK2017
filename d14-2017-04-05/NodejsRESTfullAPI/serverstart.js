var fs = require('fs');
var cp = require('child_process');

var serverFile = 'restfull.js'

var server = cp.fork('restfull.js');

console.log('Server Script gestartet');

fs.watchFile(serverFile, function (event, filename) {
  server.kill();
  console.log('Server stopped.');
  server = cp.fork('restfull.js');
  console.log('Server restarted.');
});
