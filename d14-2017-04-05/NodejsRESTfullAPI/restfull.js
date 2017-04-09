/*
  RESTfull api

  post > speichern
  get > abrufen
  put > änder
  delete > löschen

  127.0.0.1:3333/<<<datanode>>>/<<<id>>>

  wichtig: CORS
*/

//var http = require('http');
var fs = require('fs');
var express = require('express');
var bp = require('body-parser');
var app = express();

var server = app.listen(3333,function(){
  console.log('Webservice läuft');
});

app.use(bp.urlencoded({extended:true}));

var getData = function(file, callback){
 fs.readFile('data/'+file, function (err, data) {
   if(err){
     callback({data:[]});
   } else{
     callback(JSON.parse( data ));
   }
 })
};

/*ar elData;
getData( 'elefanten.JSON', function( data ){
  elData = JSON.parse( data );
} );
console.log( elData );*/

var writeData = function(file, data) {
  fs.writeFile('data/'+file, JSON.stringify(data));

};

//Dient dazu das wir über Ajax auf unseres Webservice zugreifen können
app.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next();
});

//GET ALL
app.get('/elefanten', function (req, res) {
  console.log('Get all Item');
    getData('elefanten.json', function (data) {
      res.writeHead(200,{'Content-Type':'application/json'});
      res.end(JSON.stringify(data));
    });
});

//GET ONE
app.get('/elefanten/:id', function (req, res) {
  console.log('Get Item');
    var id = req.params.id;
    getData('elefanten.json', function (data) {
      res.writeHead(200,{'Content-Type':'application/json'});
      res.end(JSON.stringify({data:[data.data[id]]}));
    });
});

//POST
app.post('/elefanten', function (req, res) {
  console.log('New Item');
  getData('elefanten.json', function(data){
    console.log('test');
    data.data.push(req.body);
    writeData('elefanten.json', data);
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify({id: data.data.length - 1}));
  });
});

//PUT
app.put('/elefanten/:id', function (req, res) {
  console.log('Item changed');
  var id = req.params.id;
  getData('elefanten.json', function(data){
    data.data[id] = req.body;
    writeData('elefanten.json', data);
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify({changed: true}));
  });
});

//DELETE
app.delete('/elefanten/:id', function (req, res) {
  console.log('Item deleted');
  var id = req.params.id;
  getData('elefanten.json', function(data){
    data.data[id] = null;
    writeData('elefanten.json', data);
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify({deleted: true}));
  });
});
