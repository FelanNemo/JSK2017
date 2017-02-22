/***************************
Window.onload - alles wird erst ausgeführt wenn die Seite
fertig geladen ist
***************************/
window.onload = function(){
  drawTable();
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

/***************************
Zeichnet eine Dynamische Tabelle
***************************/
var drawTable = function(){
  var ausgabe ='',i,j,x=0;

  ausgabe += '<table id="table1">'

  for(i=1; i<=8; i++){
    ausgabe += '<tr>';

    for(j=1;j<=6;j++){
      x++;//((i-1)*6 +j)
      if(x <= 45){
        ausgabe += '<td>'+ x +'</td>';
      } else{
        ausgabe += '<td>&nbsp</td>'
      }

    }

    ausgabe += '</tr>';
  }

  ausgabe += '</table>'
  _e('ausgabe').innerHTML = ausgabe;
}
