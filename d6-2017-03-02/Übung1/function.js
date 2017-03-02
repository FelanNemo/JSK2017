/*************************
 * Gobale Variablen
 *************************/

/*************************
 * Consturktoren
 *************************/
var Bike = function(options){
  /*if(farbe){
    this.farbe = farbe;
  } else {
    this.farbe = '#000000'
  }

  // this.farbe = farbe ? farbe: '#000000'; ist das gleiche wie das IF, Conditinal Assigment, Bediengte Zuweiseung*/
  var _this = this;
  options = options || {};
  this.farbe = options.farbe || '#000000'; //ebenfalls wie das IF nur sehr kurz
  this.groesse = options.groesse || 50;
  this.speed =  0 ;
  this.fahren = function(){
    $('svg', _this.div).css({
      'margin-left': parseInt($('svg', _this.div).css('margin-left')) + _this.speed
    })
  }
  setInterval(this.fahren,250);

  /* Getter und Setter
  this.setSpeed = function(v){
    speed = v
  }

  this.getSpeed = function(){
    return speed;
  }
  var speed = this.speed*/

  this.div = $('<div>')
    .appendTo('#rennbahn')
    .append($('#biketemplet svg')
      .clone() //Dupliziert das Element
      .attr({width: this.groesse, height: this.groesse})
      .on('click', function(){
        _this.speed++;
      })
    );
    this.div.find('path')
      .attr({fill: this.farbe});
};



/*************************
 * Run function
 *************************/
$( document ).ready( function() {

  /* Aufrufe der Objekte
  var f = new Bike({});
  var f2 = new Bike({farbe: 'red'}, {groesse: 100});
  var f3 = new Bike({farbe: 'yellow'});
  var f4 = new Bike({groesse: 500});
*/

  $('#add')
    .on('click', function(){
      var f = new Bike({farbe: $('#color').val()});
    });

});
