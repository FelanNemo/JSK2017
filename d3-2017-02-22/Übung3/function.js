/***************************
Window.onload - alles wird erst ausgeführt wenn die Seite
fertig geladen ist
***************************/
window.onload = function(){
  drawTable3();
}

/*
Globale Variablen
*/
var zahlen = [];

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

/***************************
Zeichnet eine Dynamische Tabelle
***************************/
var drawTable2 = function(){
  var ausgabe ='',i;

  ausgabe += '<table id="table1">'

  for(i=1; i<=45; i++){
    if(i%6 == 1){
    ausgabe += '<tr>';
    }

    ausgabe += '<td>'+i+'</td>';

    if(i%6 == 0){
    ausgabe += '</tr>';
    }

  }

  ausgabe += '</table>'
  _e('ausgabe').innerHTML = ausgabe;
}

/***************************
Zeichnet eine Dynamische Tabelle
***************************/
var drawTable3 = function(){
  var oTable, oTR, oTD, i;
  oTable = document.createElement('table');
  oTable.setAttribute('border', '1');
  //oTable.style.background = '#ccc';

  for(i=1; i<= 45; i++){
    if(i%6 == 1){
      oTR = document.createElement('tr');
      oTable.appendChild(oTR);
    }
    oTD = document.createElement('td');
    oTD.innerHTML = i;
    oTD.i = i;
    oTD.onclick = wahl;
    oTR.appendChild(oTD);
  }

  _e('ausgabe').appendChild(oTable);
}

var wahl = function(e){
  e.preventDefault();

  var zahl = this.innerHTML * 1, i;

  if(zahlen.length == 6){ return; }
  if(this.className == 'gewählt'){
    this.className = '';
    var buffer = zahlen.indexOf(this.i);

    console.log(buffer);
    if(buffer > -1){
      zahlen.splice(buffer,1);
    } 

  }

  /*for(i=0; i<zahlen.length; i++){
    if(zahlen[i] == zahl){
      return;
    }
  }*/

  zahlen.push(zahl);
  this.className = 'gewählt';

  console.log(zahlen);

  zahlen.sort(function(a,b){
    return a - b;
  });

  _e('sechser').innerHTML = 'Ihre Zahlen: ' + zahlen;
}
