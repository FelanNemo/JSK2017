/* ©2017, WIFI */
/************************



************************/
var _e = function( id ) {
  return document.getElementById( id );
}

/************************



************************/
var zahlEinlesen = function( text ) {
  var zahl;
  text = text.replace( ',', '.'); // ersetze , mit .
  zahl = text * 1;
  return zahl;
}

/************************



************************/
var zahlAusgeben = function( zahl ) {
  var text;
  zahl = Math.round( zahl * 100 ) / 100; // Math.floor, Math.ceil
  text = zahl + '';
  text = text.replace( '.', ','); // ersetze . mit ,
  return text;
}
/************************



************************/
var zufallsZahl = function( von, bis ) {
  // Math.random() -> 0...1
  var zufall, anzahl;
  anzahl = bis - von + 1;
  zufall = Math.floor( Math.random() * anzahl ) + von;
  return zufall;
}
