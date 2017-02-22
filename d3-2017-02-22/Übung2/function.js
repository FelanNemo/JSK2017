/***************************
Window.onload - alles wird erst ausgeführt wenn die Seite
fertig geladen ist
***************************/
window.onload = function(){
  hideEl('ausgabe');
  document.forms[0].onsubmit = zahlSpeichern; //Eine Möglichkeit das Formular aufzurufen,
  //Automatisch erstelltes Array bei JS
  _e('tabEin').onclick = tabEingabe;
  _e('tabAus').onclick = tabAusgabe;
}

/*
Globale Variablen
*/
 var aZahlen = [];

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
Speichert die Eingabe aus dem Inputfeld
Parameter
e : Event des Formulars
***************************/
var zahlSpeichern = function(e){
  e.preventDefault();

  var eingabe, userZahl;

  eingabe = _e('zahl').value;
  userZahl = zahlEinlesen(eingabe)

  if(isNaN(userZahl) || eingabe ==''){
    alert ('Keine Zahl!');
  } else{
    aZahlen.push(eingabe);
  }

  console.log(aZahlen);

}

/***************************
Formt die Eingabe eines Inputfelds in eine Zahl um
Parameter
text : Text aus dem Inputfeld
***************************/
var zahlEinlesen = function(text){
  var zahl;

  text = text.replace(',','.');// Erstezt , durch .
  zahl = text * 1;
  return zahl;
};

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

  drawTable();
  zahlAusgabe();
  summe();
  min();
  max();
  isPrim(aZahlen)

  _e('tabEin').className = '';
  _e('tabAus').className = 'current';
}

/***************************
Gibt Zahlen aus Array im Ausgabe Tab aus
***************************/
var zahlAusgabe = function(){
  var sAusgabe = '', i;

  for( i = 0; i < aZahlen.length; i++)//let i is eine var Deklaration die nur für den Scriptblock gilt
  {
    sAusgabe += aZahlen[i] +'(<a href="#" onclick="löschen('+i+')">X</a>)<br>' ;
  }
  _e('array').innerHTML = 'Das Array beinhaltet folgende Zahlen: <br>' +
  sAusgabe;

  //console.log(sAusgabe);
}

/***************************
Addiert die Zahlen des Arrays
***************************/
var summe = function(){
  var sum = 0, i;

  for( i = 0; i < aZahlen.length; i++){
    sum += aZahlen[i]*1;
  }

  _e('sum').innerHTML = 'Die Summe ist ' + sum;
}

/***************************
Sucht die kleinste Zahl
***************************/
var min = function(){
  var minOfArray = Math.min.apply(Math, aZahlen);

  _e('min').innerHTML = 'Das Minimum ist ' + minOfArray;
}

/***************************
Sucht die größte Zahl
***************************/
var max = function(){
  var maxOfArray = Math.max.apply(Math, aZahlen);

  _e('max').innerHTML = 'Das Maximum ist ' + maxOfArray;
}
/***************************
Sucht die Primzahlen
***************************/
var isPrim = function(value){
  for(var i=2; i<value; i++){
    if(value%i === 0){
      return false;
    } 
  }
  //_e('prim').innerHTML = 'Primzahlen sind: ' +
  return value > 1;
}
/***************************
Löscht Zahlen
Parameter
index : Welche Zahl gelöscht werden soll
***************************/
var löschen = function(index){
  aZahlen.splice(index,1);
  tabAusgabe();
  drawTable();
}

/***************************
Zeichnet eine Dynamische Tabelle
***************************/
var drawTable = function(){
  var ausgabe ='',i,j,x =-1;

  ausgabe += '<table id="table1">'

  for(i=1; i<=aZahlen.length; i++){
    ausgabe += '<tr>';

    for(j=1;j<=aZahlen.length;j++){
      x++;
      ausgabe += '<td>' + aZahlen[x] + '(<a href="#" onclick="löschen('+i+')">X</a>)</td>';
    }

    ausgabe += '</tr>';
  }

  ausgabe += '</table>'
  _e('table').innerHTML = ausgabe;
}
