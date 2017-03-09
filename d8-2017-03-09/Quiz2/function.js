/*************************
 * Gobale Variablen
 *************************/
var game = {
  name:'',
  points: 0,
  level: 1,
  maxLevel:5,
  frageID:-1,
  time: 10000,
  interval: 0,
  loading:function(){
    $('section').hide();
    $('#s2').show();
  },
  getQuestion:function(){
    game.loading();
    $.ajax({
      data:{
        type:'frageneu',
        level:game.level
      },
      success:function(d){
        $('#s3,#s2').toggle();
        game.frageID = d.frageID;
        $('#s3 h1').html(d.frage);
        $('#s3 button').each(function(i){
          $(this).html(d.antworten[i]);
        }).on('click', function(){
          clearInterval(game.interval);
          $(this).addClass('clicked');
          $('#s3 button').off('click'); // es können keine weiteren Button geklickt werden
          game.checkAnswer($(this).attr('data-answer')*1);
        });
        clearInterval(game.interval);
        game.time = 10000;
        game.interval = setInterval(game.progress,40);
      }
    })
  },
  progress:function(){
    game.time-= 40;
    $('progress').val(100*game.time/10000)
  },
  checkAnswer:function(i){
    $.ajax({
      data:{
        type:'check',
        level:game.level,
        frageID:game.frageID,
        antwort:i+1
      },
      success:function(d){
        $('.clicked').addClass(d.checkOk ? 'anwserTrue' : 'answerFalse');
        $('button[data-answer="'+d.correctAntwort*1-1+'"]"').addClass('anwserTrue');

        if(d.checkOk){
          game.points += game.time;
          game.level++;
        }

        if(game.level == 6 || !d.checkOk){
          game.endGame();
          alert('Ende:' + game.points)
        }else {

          setTimeout(getQuestion, 2000);
        }
      }
    })
  },
  endGame:function(){
    $('#s3,#s4').toggle();
    $.ajax({
      data:{type:'writehighscore',ms:game.points,name:game.name},
      success:function(){
        $('#s4 div').html(d.html);
      }
    })
  }
};

 /*************************
  * Functions
  *************************/
$.ajaxSetup({
	url:'http://wifi.1av.at/516/tn/quiz2.php',
	type:'POST'
});

$( document ).on( 'click', '#s1 button', function(e) {
	e.preventDefault();
	game.name = $( '#s1 input' ).val();
	if ( game.name == '' ) {
		alert( 'Armin will wissen, wie du heisst!');
    return;
	}
    game.getQuestion();
});

Array.prototype.shuffle = function () {
  var temp = this.slice(), j = 0;
  for(var k in temp){

  }
  while(temp.length > 0){
    var anz = temp.length;
    var i = Math.floor(Math.random() * anz);
    var elem = temp.splice(i,1);
    temp[j] = elem[0];
    j++;
  }
};
