//Copyright 2017, WIFI

/***************************

***************************/
var _e = function(id){
  return document.getElementById(id);
};

/***************************

***************************/
var zahlEinlesen = function(text){
  var zahl;

  text = text.replace(',','.');// Erstezt , durch .
  zahl = text * 1;
  return zahl;
};

/***************************

***************************/
var zahlAusgeben = function(zahl){
  var text;
  zahl = Math.round(zahl*100)/100; //Math.floor, Math.ceil
  text = zahl + '';
  text = text.replace('.',',');
  return text;
};
