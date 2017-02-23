/***************************
Globale Variablen
***************************/
var search = [1,2,3,4,5,6];

/***************************
Window.onload - alles wird erst ausgeführt wenn die Seite
fertig geladen ist
***************************/
$(document).ready(function(){
  draw();
});

/***************************
Zeichnen des Spielfelds
***************************/
var draw = function () {
 //12 divs erstellen und Zeichnen
 //jedes 5 bekommt ein clear
}
/***************************
Füllen der Karten
***************************/
var füllen = function(){

}
/***************************
Maximal 2 Karten umdrehen
(eventuell das Vergleichen auch hier)
***************************/
var umdrehen = function () {

}

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
