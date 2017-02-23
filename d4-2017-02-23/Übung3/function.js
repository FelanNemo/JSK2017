/***************************
Globale Variablen
***************************/


/***************************
Window.onload - alles wird erst ausgeführt wenn die Seite
fertig geladen ist
$() ist das gleiche wie jQuery()
***************************/
//window.onload = function(){
$(document).ready(function(){
  $('#absatz'); // liefert ein jQuery Objekt
  //document.getElementById(id); liefert ein HTML Node Element
  //oder unser _e(id) liefert ein HTML Node Element
  document.getElementById('absatz').innerHTML = 'Neuer Text';
  $('#absatz').html('Neuer Text');

  var oAbsatz = document.getElementById('absatz');
  var jAbsatz = $('#absatz');

  oAbsatz.innerHTML = 'Schon wieder neu?'
  jAbsatz.html('nochmal');

  var html = oAbsatz.innerHTML;
  html = jAbsatz.html();

  oAbsatz.innerHTML = ''
  jAbsatz.html('');

  jAbsatz = $(oAbsatz); //Umwandeln von HTMLNode zu jQuery Objekt
  oAbsatz = jAbsatz.get(0);//in unserem Fall geht das so
  //get liefert alle html attribute vom jQUery aus und wandelt es
  //in eine HTMLNode um

  //$('.absatz') .classe, #id
  //$('.absatz').css('background', '#farbe') inline CSS über jQuery
  //$(p+p)..... p+p das p das nach einem p kommt
  //bei mehreren nimmt er immer nur eines
  //$(p p)..... p p das p innerhalb eines ps
  /*
  $('p:last-child').css({
  'background-color': 'fcc',
  color: '#00c',
  'font-size':'2em'
}) um CSS mehr zu ändern

in jQuery kann man element:last nehmen, dieses nimmt immer das letzte
der Elemente
Not ist eine Psydeu Klasse jQuerys und dient zur Abfrage ob ein Element
nicht diesen Identifier hat (Element:not(Identifier))

$('button').click(function(e){
  e.preventDefault();
  var eingabe;
  eingabe = $('input[type=text]').val(); .... val() ist wie value
  eingabe = $('input[type=text]').val(''); ... leeren
  eingabe = $('input[type=text]').focus(); ... courser reinsetzten
})
  */
});

/***************************
Zeigt Elemente an
Parameter
id : id des Elements
***************************/
var showEl = function(id){
  _e(id).style.display = 'block';
}

/***************************
Blendet Elemente aus
Parameter
id : id des Elements
***************************/
var hideEl = function(id){
  _e(id).style.display = 'none';
}
