/* Mein erster Webserver */

var http = require('http'); // Erzeugt das HTTP Modul

http.createServer(function(request, response) {
  //Send HTTP Header
  //Status 200/OK
  //Content Type: text/plain

  //Schreibt den Header
  ////Status, Objekt immer diese Reihenfolge
  response.writeHead(200,{'Content-Type':'text/plain'});
  //Sendet den Text in diesem Fall raus
  response.end('Hallo Welt!');
  //Gibt den Port an auf den gehört werden soll
}).listen(12345);

console.log('Server läuft: http://127.0.0.1:12345');
