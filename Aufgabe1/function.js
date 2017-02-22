//Copyright 2017, WIFI
var bmi;

window.onload = function(){
  //calc();
  document.getElementById('myForm').onsubmit = calc;
  //console.log('BMI: ' + calc());
}

/***************************

***************************/
var _e = function(id){
  return document.getElementById(id);
};

/***************************

***************************/
var calc = function(e){
  e.preventDefault();

  var gewicht;
  var größe;
  var größem;
  //var bmi = 0;

  gewicht = _e('gewicht').value * 1;
  größe = _e('groesze').value * 1;
  größem = (größe/100) ;

  //console.log('Gewichtin Calc: ' + gewicht);
  //console.log('Größe in Calc: ' + größe);
  //console.log('Größe in m: ' + größem);

  bmi = gewicht / (größem * größem );
  _e('bmi').innerHTML = bmi;
  _e('container').className = '';
  console.log('BMI in Calc: ' + bmi);
  color(bmi);
  return bmi;
}

var color = function(bmi){
  switch(bmi) {
    case bmi<=17.5:
        _e('BMI').className = 'BMIdarkBlue';
        break;
    case bmi > 17.5 && bmi <= 18.4:
        _e('BMI').className = 'BMIBlue';
        break;
    case bmi > 18.4 && bmi <= 25:
        _e('BMI').className = 'BMIlightBlue';
        break;
    case bmi > 25 && bmi <= 30:
        _e('BMI').className = 'BMIGreen';

        break;
    case bmi > 30 && bmi <= 40:
        _e('BMI').className = 'BMIOrange';
        break;
    case bmi > 40:
        _e('BMI').className = 'BMIRed';
        break;
  }
}
