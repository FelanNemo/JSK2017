
var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(5555, function () {
  console.log('WIFI Secret Chat on 5555');
});

app.use(express.static('res'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/d14-chat.html');
});

var io = socket(server);

io.on('connection', function(socket) {
  console.log('Neuer Benutzer verbunden');

  socket.on('disconnect',function() {
    console.log('Ausgeloggt');
  });

  socket.on('shout', function(data) {
    console.log('Benutzer sagt: ' + data);
    io.emit('newmessage', data);
  });


});
