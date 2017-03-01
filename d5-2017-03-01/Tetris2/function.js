/*
Globale Variablen
*/
var countRows = 10, countCols = 7;
var I;
var rowCount = -1, col = 4;
var Bausteine = [tile_0,tile_T,tile_I, tile_Z, tile_z, tile_L,tile_l]


var tile_0 = [
  [1,1],
  [1,1]
];

var tile_T=[
  [0,1,0],
  [1,1,1],
  [0,0,0]
];

var tile_I=[
  [1,1,1,1],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
];

var tile_Z=[
  [1,1,0],
  [0,1,1],
  [0,0,0]
];

var tile_z=[
  [0,1,1],
  [1,1,0],
  [0,0,0]
];

var tile_L=[
  [0,0,0],
  [1,0,0],
  [1,1,1]
];

var tile_l=[
  [0,0,0],
  [0,0,1],
  [1,1,1]
];
/*
Funtionen
*/
var createTable = function() {
	var cols, rows, table, tr;
	table = $('<table>').appendTo( '#game' );
	for ( rows=1; rows<=countRows; rows++ ) {
			tr = $( '<tr>' ).appendTo( table );
			for ( cols=1; cols<=countCols; cols++ ) {
				$( '<td>' ).appendTo( tr );
			}
	}
}

var random = function(min,max) {
  return Math.floor( Math.random() * (max-min+1) ) + min;
}

var activeTile = Bausteine[random(0,Bausteine.length-1)];

var play = function() {
  var i,j,tile = tile_0;

  //moveTemp('gt');

	if ( rowCount+1 > countRows) {
		$( '.eins' ).removeClass( 'eins' ).addClass( 'fix' );
		rowCount = -1;
    activeTile = Bausteine[random(0,Bausteine.length-1)];
		col = random(1,countCols-tile[0].length+1);
	} else {
		$( '.eins' ).removeClass( 'eins' );
	}
	rowCount++;

  for(i=0; i<tile.length; i++){
    for(j=0; j<tile[i].length; j++){
      if(tile[i][j]==1){
        $( 'tr:nth-child('+(rowCount+i)+') td:nth-child('+(col+j)+')' ).addClass( 'eins' );
      }
    }
  }
}

/*
Run function
*/
$( document ).ready( function() {
	createTable();
	I = setInterval( play, 500 );

	$( document ).on( 'keydown', function(e) {
			var key = e.originalEvent.keyCode;
      // 37 -> links
			// 39 -> rechts
			if ( key == 37 && col > 1 && !$('.eins').prev().hasClass('fix') ) { col--; rowCount--; }
			if ( key == 39 && col < 7 && !$('.eins').next().hasClass('fix') ) { col++; rowCount--; }
			play();
	});

});
