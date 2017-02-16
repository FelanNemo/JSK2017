//Copyright 2017, WIFI

/***************************

***************************/
var _e = function(id){
  return document.getElementById(id);
};

/***************************

***************************/
var rnd = function(){
  var zahl;
  var min = 1;
  var max = 10;

  zahl = Math.random() * ((max - min) + 1) + min;
  zahl = Math.floor(zahl);

  return zahl;
}
