/***************************
Globale Variablen
***************************/
var aBausteine = [1,2,3,4,5,6,7];

var countRows = 10, countCols = 6, count = 1, col = 4;

/***************************
Start Function
***************************/
$(document).ready(function(){
  drawGamefield();
  drawTetromino(1);
  setTimeout( moveTetromino(),100);

  $('document').on('keypress', function(e){
    var key = e.originalEvent.keyCode;

    //37 links
    //39 recht
    if(key == 37 && col > 1){ col--; countRows--;}
    if(key == 39 && col < 7){ col++; countRows++;}
  })
});

var drawGamefield = function(){
  var cols, row, table, tr, div, button;

  table = $('<table>').appendTo('#game');
  for(rows=1; rows <= countRows; rows++){
    tr = $('<tr>').appendTo(table);
    for(cols=1; cols <= countCols; cols++){
      $('<td>').appendTo(tr);
    }
  }


  /*var i;

  jDiv = $('<div>');

  jTable = $('<table>');

  jButton = $('<button>');

  for(i=1; i<=200; i++){
    if(i%10 == 1){
      jTR = $('<tr>');
      jTR.attr('data-zeile',(i/10)-0.1).appendTo(jTable);
    }
    jTD =$('<td>');
    jTD.attr('data-i', i);
    jTD.appendTo(jTR);
  }

  jDiv.append(jTable);
  jButton.html('Los gehts')
    .attr('id', 'btn1');
  jDiv.append(jButton);
  $('body').append(jDiv);*/
};

var drawTetromino = function (tetromino) {

  /*switch(tetromino) {
      case 1:
        $('td[data-i=5]').attr('id','eins');
        break;
      //case für alle Bausteine
    }*/
}

var rnd = function(min, max){
  return Math.floor(Math.random()*(max-min+1))+i;
}

var moveTetromino = function(){
  $('.eins').removeClass('.eins').addClass('.fix')

  if(count > countRows || $('tr:nth-child('+count+') td:nth-child('+col+')').hasClass('fix') ){
    $('.eins').removeClass('eins').addClass('fix');
    count = 1;
    col = rnd(1,7);
  } else {
    $('.eins').removeClass('eins');
  }
  $('tr:nth-child('+count+') td:nth-child('+col+')').addClass('eins');
  count++;
  /*for($('tr[data-zeile]'.val < 19){
    $('td[data-i]'.val)attr('id','');
    $('td[data-i]'.val+10)attr('id','eins');
  }

  if($('tr[data-zeile=19]')){
    $('td[data-i=195]').attr('id','fix')
  }*/
}
