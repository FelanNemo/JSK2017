/***************************
Globale Variablen
***************************/
var aLotto = [], aSpiel = [];
var jTable, jTR, jTD, jButton;

/***************************
alles wird erst ausgeführt wenn der DOM
fertig geladen ist
***************************/
$(document).ready(function(){
  drawTable();
});

/***************************
zeichnen und füllen der Tabelle
***************************/
var drawTable = function(){
  var i;//jAusgabe;

  jTable = $(document.createElement( 'table' ));
  jTable.geklickt = 0;
  jTable.attr('id', 'tb1');

  jButton = $(document.createElement('button'));

  for(i=1; i<=45; i++){
    if(i%6 == 1){
      jTR = $(document.createElement( 'tr' ));
      //console.log('Ein TR wurde generiert');
      jTR.appendTo(jTable);
    }
    jTD =$(document.createElement( 'td' ));
    //console.log('Ein TD wurde genriert');
    jTD.html('<b>'+i+'</b>');
    jTD.attr('i', i);
    //console.log(jTD.attr('i'));
    jTD.click(numberClicked);
    jTD.appendTo(jTR);
  }


  document.getElementById('ausgabe').appendChild(jTable.get(0));
	jButton.html('Los gehts');
	jButton.attr('disabled', 'disabled');
  jButton.attr('id', 'btn1');
  jButton.click(randomNumber);
  jButton.click(compareNumber);
	document.getElementById( 'ausgabe' ).appendChild(jButton.get(0) );
}

/***************************
Markieren und speichern der gewählten Zahlen
***************************/
var numberClicked = function(){
  //var jButton = $('btn1'), jTable = $('tb1'), jTD = $('table td');

  //console.log($(this).attr('i'));

  jButton.attr( 'disabled', 'disabled' );

  if ( aLotto[$(this).attr('i')] ) {
    console.log('Ich bin im if');
    delete aLotto[$(this).attr('i')];
    this.className = '';
    jTable.geklickt--;
    return;
  }
  if ( jTable.geklickt >= 5 ) {
    jButton.removeAttr( 'disabled' );
  }

  if ( jTable.geklickt > 5 ) {
    return;
  }
  jTable.geklickt++;
  this.className = 'selected';

  //aLotto[ $(this).attr('i') ] = true;
  aLotto.push($(this).attr('i'))

  //console.log( window.aLotto )
}

/************************
Speichert die Zufallszahlen
***********************/
var randomNumber = function(){
  var i;

  if ( jTable.geklickt < 6 ) { return; }
  for ( i=1; i<=6; i++ ) {
    aSpiel.push( zufallsZahl(1,45) );
  }

  document.getElementById('gewählteNummern').innerHTML = "Die Nummern sind: " + aLotto;
  document.getElementById('zufallsNummern').innerHTML = "Die Zufallsnummern sind: " + aSpiel;

  //console.log(i);
  if(i==7){
    aSpiel = [];
  }
}

/************************
Generiert die Zufallszahlen
************************/
var zufallsZahl = function( von, bis ) {
  // Math.random() -> 0...1
  var zufall, anzahl;
  anzahl = bis - von + 1;
  zufall = Math.floor( Math.random() * anzahl ) + von;
  return zufall;
}

/************************
Vergleicht gewählte und zufalls Nummern
************************/
var compareNumber = function(){
    aLotto.filter(function(el){
      return ($.inArray(el,aSpiel) !== -1);
    });
}
