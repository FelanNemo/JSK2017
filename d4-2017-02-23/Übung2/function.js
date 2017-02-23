/***************************
Globale Variablen
***************************/
var personen = [];
var monate =[];

/***************************
Window.onload - alles wird erst ausgeführt wenn die Seite
fertig geladen ist
***************************/
window.onload = function(){
  personen = JSON.parse(localStorage.getItem('personen')) || [];

  _e('geschlechtM').checked = false;
  _e('geschlechtW').checked = false;

  _e('tag').className = '';
  _e('monat').className = '';
  _e('jahr').className = '';

  selectTage();
  selectMonat();
  selectJahr();

  _e('formEingabe'). onsubmit = speichern;
  _e('tabEin').onclick = tabEingabe;
  _e('tabAus').onclick = tabAusgabe;
  _e('del').onclick = löschen;

  printPersonen();

  //console.log( localStorage );
  //localStorage.clear();
  /*for(i in localStorage) {
    console.log( i, localStorage[i] );

    //console.log(localStorage.getItem('gebDate'+i));
    //console.log(localStorage.getItem('age'+i));
    //console.log(localStorage.getItem('gender'+i));
  }*/
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

/***************************
Tage für select
erzeuge Optionen für Tage von 1 bis 31
***************************/
var selectTage = function(){
  var i, oOption;

  for(i=1; i<=31; i++){
    oOption = document.createElement('option');
    oOption.innerHTML = i;
    oOption.value = i;
    _e('tag').appendChild(oOption);
  }
}

/***************************
Monate für select
***************************/
var selectMonat = function(){
  var i, oOption;

  monate = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

  for(i=0; i<=11; i++){
    oOption = document.createElement('option');
    oOption.innerHTML = monate[i];
    oOption.value = i+1;
    _e('monat').appendChild(oOption);
  }
}

/***************************
Jahr für select
***************************/
var selectJahr = function(){
  var i, oOption;

  for(i=2017; i>=1900; i--){
    oOption = document.createElement('option');
    oOption.innerHTML = i;
    oOption.value = i;
    _e('jahr').appendChild(oOption);
  }
}

/***************************
Speichern der Daten
***************************/
var speichern = function(e){
  e.preventDefault();

  var tag, monat, jahr, geschlecht ='';

  tag = _e('tag').value * 1;
  //monat = _e('monat').option[_e('monat').selectedIndex].value * 1;
  monat = _e('monat').value * 1;
  jahr = _e('jahr').value * 1;

  if(_e('geschlechtW').checked == true){
    geschlecht = _e('geschlechtW').value;
  }
  if(_e('geschlechtM').checked == true){
    geschlecht = _e('geschlechtM').value;
  }

  //Check
  if(isNaN(tag*monat*jahr) || tag*monat*jahr == 0){
    _e('tag').className = 'error';
    _e('monat').className = 'error';
    _e('jahr').className = 'error';
    return;
  } else{
    _e('tag').className = '';
    _e('monat').className = '';
    _e('jahr').className = '';
  }
  if(geschlecht == ''){
    _e('container').className = 'error';
    return;
  }
  if(!(geschlecht == '')){
    _e('container').className = '';
  }

  var date = new Date(jahr,monat-1,tag);
  if(tag != date.getDate()){
    alert('Datum gibt es nicht'); return;
  }

  var acDate = new Date().getFullYear();
  //console.log(acDate);

  var person = {
    geburtsdatum: date,
    geburtsdatumString: tag+'.'+ monate[monat-1]+'.'+jahr,
    geburtsdatumArray: [tag,monat,jahr],
    geschlecht:geschlecht,
    alter: (acDate - jahr)
  };

  personen.push(person);

  _e('geschlechtM').checked = false;
  _e('geschlechtW').checked = false;
  _e('tag').options[0].selected = false;
  _e('monat').options[0].selected = false;
  _e('jahr').selectedIndex = 0;

  this.reset();
  printPersonen();
  hideEl('ausgabe');
  store();
}

/***************************
Erzeuge Tabelle mit allen Personen
***************************/
var printPersonen = function(){
  var oTable, oTR, oTD, i, del;

  del = _e('del');

  _e('ausgabe').innerHTML = '<table id="meineTabelle"><tr><th>Geb.Datum</th><th>Alter</th><th>Geschlecht</th></tr></table>'
  oTable = _e('meineTabelle');
  oTable.setAttribute('border', '1');
  //oTable.style.background = '#ccc';

  //for(i=0; i< personen.length; i++){
  for ( i in personen) {
    oTR = document.createElement('tr');
    oTable.appendChild(oTR);

    oTD = document.createElement('td');
    oTD.innerHTML = personen[i].geburtsdatumString;
    oTR.appendChild(oTD);
    oTD = document.createElement('td');
    oTD.innerHTML = personen[i].alter;
    oTR.appendChild(oTD);
    oTD = document.createElement('td');
    oTD.innerHTML = personen[i].geschlecht;
    oTR.appendChild(oTD);
  }

  _e('ausgabe').appendChild(oTable);
  _e('ausgabe').appendChild(del);
}

/***************************
Schreiben in den localStorage
Loacal Storage kann nur Strings speichern
***************************/
var store = function(){
  //localStorage.setItem('anzahl', personen.length);
  /*var i;
  var gebDate,age,gender;

  for(i in personen){
    localStorage.setItem('gebDate'+i,personen[i].geburtsdatumString);
    localStorage.setItem('age'+i, personen[i].alter);
    localStorage.setItem('gender'+i, personen[i].geschlecht);
  }*/

  localStorage.setItem('personen', JSON.stringify(personen));

}

var löschen = function(){
  localStorage.clear();
  hideEl('meineTabelle');
}
