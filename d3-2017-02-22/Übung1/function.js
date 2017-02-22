var name1 = 'Anna', name2 = 'Josef', name3 = 'Tanja';
//var alleNamen = new Array(); leer Array
var alleNamen = new Array('Anna','Josef','Tanja');

console.log(alleNamen[0]);

//Elemente anfügen
alleNamen[3] = 'Babara';
alleNamen[7] = 'Andreas';

//letzter Index
var letzer = alleNamen.length -1;

console.log(letzer);

//Element hinzufügen
alleNamen[letzer +1] = 'Oliver';
alleNamen[alleNamen.length] = 'Milat';
alleNamen.push('Shen');

//delete macht das Element undefined
delete alleNamen[0];

//Arrays können alles sein
alleNamen[0] = 1;
alleNamen[4] = new Array('Alex', 'Vincenz');

var trainer = alleNamen[4];

console.log(trainer[0], alleNamen[4][0]);

alleNamen[5] = new Array();
alleNamen[5]['vorname'] = 'Rene';
alleNamen[5]['nachname'] = 'Krieger'

console.log(alleNamen[5]);

//Kurzschreibweise
var teilnehmer = []; //Array Literal
