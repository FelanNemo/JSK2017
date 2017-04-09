/* Mein erster Webserver */

var http = require('http'); // Erzeugt das HTTP Modul
var fs = require('fs');
var express = require('express');
var app = express();

//Parameter: Port, Callback
var server = app.listen(12345, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listen http//%s:%s', host, port);
});

var a =['vorlage.html','Seite2.html', 'Seite3.html',]

//Get Rquest
//Parameter:Was wird angefordert, was bekomme ich zurück
for(var i in a){
  app.get('/'+a[i], function( req, res) {
    res.end('hier kommt eine File');
  });
};


/*http.createServer(function(request, response) {
  //Send HTTP Header
  //Status 200/OK
  //Content Type: text/plain

  //Schreibt den Header
  ////Status, Objekt immer diese Reihenfolge
  response.writeHead(200,{'Content-Type':'text/html'});

  //Welche Datei, was damit passieren soll
  fs.readFile(request.url.substr(1), function (err, data) {
    if( err ){
      response.end('nix da');
    }

    //Sendet den Text in diesem Fall raus
    response.end(data.toString());
  });

  //Gibt den Port an auf den gehört werden soll
}).listen(12345);

console.log('Server läuft: http://127.0.0.1:12345');*/
