/***************************
Window.onload - alles wird erst ausgeführt wenn die Seite
fertig geladen ist
***************************/
window.onload = function(){
  
}

/*
Globale Variablen
*/


/***************************
Erstezt im Code document.getElementById durch den Aufruf _e
Parameter
id : id des Elements
***************************/
var _e = function(id){
  return document.getElementById(id);
};

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
