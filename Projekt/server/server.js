/* Mein erster Webserver */

//var http = require('http');
var fs = require('fs');
var express = require('express');
var bp = require('body-parser');
var app = express();

var server = app.listen(12345, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listen http//%s:%s', host, port);
});

var files = [
  {req:'/', file:'../index.html'},
  {req:'/index.html', file:'../index.html'},
  {req:'/user', file:'../user.html'}
];

//console.log(files);
app.use(bp.urlencoded({extended:true}));
app.use(express.static('res'));

for(var i in files){
  (function (i) {
    app.get(files[i].req, function( req, res) {

      console.log(files[i]);

      fs.readFile(files[i].file, function(err, data) {
        if(!err){
          res.writeHead(200,{'Content-Type':'text/html'});
          res.end(data.toString());
        } else{
          res.writeHead(404,{'Content-Type':'text/html'});
          res.end('File not found');
        }
      });
    });
  })(i);
};

app.post('/save', function (req, res) {
  console.log(req.body);

  fs.readFile('savegame.json', function (err, data) {
    if(!err){
      try {
        var game = JSON.parse(data);
        game.game.push(req.body);
        fs.writeFile('savegame.json', JSON.stringify(game));
        console.log('Datei gefunden');
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({saved: true}))
      } catch (err){
        res.writeHead(500,{'Content-Type':'text/html'});
        res.end('File corrupted');
      }
    } else {
      //fs.writeFile('savegame.json', JSON.stringify( emptyFile ), function(err){
          var game = {game:[]};
          //console.log(game);
          game.game.push(req.body);
          //console.log(req.body);
          fs.writeFile('savegame.json', JSON.stringify(game));
          console.log('Datei erstellt');
          res.writeHead(200,{'Content-Type':'application/json'});
          res.end(JSON.stringify({saved: true}));
      //});
    }

  });


});

app.get('/button', function (req, res) {
console.log(req.body);

  fs.readFile('savegame.json', function (err, data) {
    if(!err){
      console.log('Datei gefunden');
      res.writeHead(200,{'Content-Type':'application/json'});
      res.end(JSON.stringify({da: true}))
    } else {
      console.log('Datei nicht gefunden');
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(JSON.stringify({da: false}))
      //$('#countinueGame').attr({ 'disabled':'disabled'});
    }

  });


});
