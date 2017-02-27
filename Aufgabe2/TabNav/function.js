/***************************
Globale Variablen
***************************/

/***************************
Window.onload - alles wird erst ausgeführt wenn die Seite
fertig geladen ist
***************************/
window.onload = function(){
  _e('tabEin').onclick = tabEingabe;
  _e('tabAus').onclick = tabAusgabe;
  _e('del').onclick = löschen;
}

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

/***************************
Added und löscht die HTML Class Current
***************************/
var tabEingabe = function(){
  hideEl('ausgabe');
  showEl('eingabe');

  _e('tabEin').className = 'current';
  _e('tabAus').className = '';
}

/***************************
Added und löscht die HTML Class Current
***************************/
var tabAusgabe = function(){
  hideEl('eingabe');
  showEl('ausgabe');

  _e('tabEin').className = '';
  _e('tabAus').className = 'current';
}
