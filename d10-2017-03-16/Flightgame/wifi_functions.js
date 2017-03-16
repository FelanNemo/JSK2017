/* ©2017, WIFI */

var _e = function( id ) {
  return document.getElementById( id );
}

var monthNames = ["Jänner", "Februar", "März", "April", "Mai", "Juni",
"Juli", "August", "September", "Oktober", "November", "Dezember"];

var showEl = function(id)
{
  _e(id).style.display = 'block';
}

var hideEl = function(id)
{
  _e(id).style.display = 'none';
}

var arraySum = function(aInput)
{
  return aInput.reduce((a, b) => a + b, 0);
}


// If the Date is somehow wrong, the month should shift
var isValidDate = function(tag, monat, jahr) {
 var d = new Date(jahr, monat - 1, tag);
 return d && (d.getMonth() + 1) == monat;
}

var isPrime = function(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
 if (n%2==0) return (n==2);
 if (n%3==0) return (n==3);
 var m=Math.sqrt(n);
 for (var i=5;i<=m;i+=6) {
  if (n%i==0)     return false;
  if (n%(i+2)==0) return false;
 }
 return true;
}

var zahlEinlesen = function( text ) {
  var zahl;
  if (text == '') return NaN;
  text = text.replace( ',', '.'); // ersetze , mit .
  zahl = text * 1;
  return zahl;
}

var zahlAusgeben = function( zahl ) {
  var text;
  zahl = Math.round( zahl * 100 ) / 100; // Math.floor, Math.ceil
  text = zahl + '';
  text = text.replace( '.', ','); // ersetze . mit ,
  return text;
}

var zufallsZahl = function( von, bis ) {
  // Math.random() -> 0...1
  var zufall, anzahl;
  anzahl = bis - von + 1;
  zufall = Math.floor( Math.random() * anzahl ) + von;
  return zufall;
}
