/*
  RESTFUL Webservice

  POST > speichern
  GET > abrufen
  PUT > ändern
  DELETE > löschen

  127.0.0.1:3333/<<<datanode>>>/<<<id>>>

  Wichtig: CORS

*/

var http = require( 'http' );
var fs = require( 'fs' );
var express = require( 'express' );
var bp = require( 'body-parser' );

var app = express();
var server = app.listen(3333,function(){ console.log('Webservice läuft.'); });
app.use( bp.urlencoded({extended:true} ));

/*var myfs = require( './myfs.js' );
var getData = myfs.getData;
var writeData = myfs.writeData;*/

var getData = function( file, callback ) {
  fs.readFile( 'data/'+file, function(err,data) {
    if ( err ) {
      callback({data:[]});
    } else {
      callback(JSON.parse(data));
    }
  })

}
var writeData = function( file, data ) {
  fs.writeFile( 'data/'+file, JSON.stringify( data ) );
  console.log( 'Daten gespeichert. '+file );
}

app.use( function(req, res, next) {
  res.setHeader( 'Access-Control-Allow-Origin', '*' );
  res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE' );
  next();
});

// GET ALL
app.get('/:file', function(req,res) {
  console.log( 'Get all Items' );
  var file = req.params.file
  getData( file+'.json', function(data){
    res.writeHead( 200, {'Content-Type':'application/json'});
    res.end( JSON.stringify( data ));
  });
});

// GET ONE
app.get('/:file/:id', function(req,res) {
  console.log( 'Get Item' );
  var id = req.params.id;
  var file = req.params.file
  getData( file+'.json', function(data){
    res.writeHead( 200, {'Content-Type':'application/json'});
    res.end( JSON.stringify({data:[ data.data[id] ]}));
  });
});

// POST
app.post('/:file',function(req,res){
  console.log( 'New Item' );
  var file = req.params.file;
  getData( file+'.json', function(data){
      data.data.push( req.body );
      writeData( file+'.json', data );
      res.writeHead( 200, {'Content-Type':'application/json'});
      res.end( JSON.stringify({id:data.data.length-1}));
  });
});

// PUT
app.put('/:file/:id', function(req,res) {
  console.log( 'Change Item' );
  var id = req.params.id;
  var file = req.params.file;
  getData( file+'.json', function(data){
      data.data[id] = req.body;
      writeData( file+'.json', data );
      res.writeHead( 200, {'Content-Type':'application/json'});
      res.end( JSON.stringify({changed:true}));
  });
});

// DELETE
app.delete('/:file/:id', function(req,res) {
  console.log( 'Delete Item' );
  var id = req.params.id;
  var file = req.params.file;
  getData( file+'.json', function(data){
      data.data[id] = null;
      writeData( file+'.json', data );
      res.writeHead( 200, {'Content-Type':'application/json'});
      res.end( JSON.stringify({deleted:true}));
  });
});
