/* MEIN 1. Webserver */

var http = require( 'http' );
var fs = require( 'fs' );
var express = require( 'express' );
var bp = require( 'body-parser' );
var app = express();

var server = app.listen(12345,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log( 'Server listen http://%s:%s', host, port);
});

var files = [
  {req:'/',file:'index.html',type:'text/html'},
  {req:'/output', file:'output.html',type:'text/html'}
];

app.use( bp.urlencoded({extended:true} ));

app.use( express.static('res') );

var userTabelle = function( data, callback ) {
  fs.readFile( 'name.json', function(err,jsondata) {
    var user = JSON.parse(jsondata);
    var str = '<table border="1">';
    for ( let i in user.user ) {
      str += '<tr><td>'+user.user[i].name+'</td></tr>';
    }
    str += '</table>';
    callback( data.toString().replace('[CONTENT]',str) );
  });
}

for ( var i in files ) {
  (function(i){

    app.get( files[i].req, function(req,res) {

      fs.readFile( files[i].file, function(err,data) {
        if (!err) {
          res.writeHead(200,{'Content-Type':files[i].type});

          userTabelle( data, function( data ) {
            res.end( data ) ;
          } );


        } else {
          res.writeHead(404,{'Content-Type':'text/html'});
          res.end( 'File not found.' );
        }
      });
    });
  })(i);
}

app.post( '/save', function(req,res) {

  fs.readFile( 'name.json', function(err,data) {
    try {
      var user = JSON.parse( data );
      user.user.push( req.body );
      fs.writeFile( 'name.json', JSON.stringify( user ) );
      console.log( 'Neue Daten gespeichert.' );
      res.writeHead(200,{'Content-Type':'application/json'});
      res.end( JSON.stringify({saved:true}) );

    } catch(err) {
      res.writeHead(500,{'Content-Type':'text/html'});
      res.end( 'Database connection error.' );
    }

  })


})

/*
app.get( '/pages/:page', function(req,res) {
  req.params.page
})
*/

/*http.createServer( function( request, response ) {
  // Send HTTP Header
  // Status 200/OK
  // Content Type:text/plain

  response.writeHead( 200, {'Content-Type': 'text/html'} );
  fs.readFile( request.url.substr(1), function(err,data) {
    if ( err ) { response.end( 'nix da' ); }
    else { response.end( data.toString() ); }
  } );


}).listen(12345);

console.log( 'Server läuft: http://127.0.0.1:12345');*/
