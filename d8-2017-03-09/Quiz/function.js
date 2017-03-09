/*************************
 * Gobale Variablen
 *************************/
var game ={
  name:'',
  points: 0,
  level: 1,
  maxLevel:5,
  loading:function(){
    
  },
  getQuestion:function(){
    $.ajax({
      data:{type:'frageneu',level:game.level},
      success:function(d){
        questionObject.question = d.frage;
        questionObject.answers = d.antworten;
      }
    })
  }
};

var questionObject = {
  question = '',
  answers = []
};

/*************************
 * Consturktoren
 *************************/

 /*************************
  * Functions
  *************************/
  $.ajaxSetup({
    url: 'http://wifi.1av.at/516/tn/quiz2.php',
    type: 'POST',
  });

var startGame = function(){
  game.name = $('input').val();
  //$('#game').remove();
  $(document).ajaxStart(function(){
    ajaxLoading(true);
  });

  $(document).ajaxComplete(function(){
    ajaxLoading(false)
  });

  if(game.name == ''){
    missingName();
  } else{
    $('#game').remove();
    $('<div id="game">').appendTo('body');
    $('<span>').html(question).appendTo('#game');
    $('<br>').appendTo('#game');
    //console.log(question);

    for(var i in answers){
      $('<button id='+(i*1+1)+'>').html(answers[i]).appendTo('#game');
    }
  }

  play();
};

var play = function(){
  $('button').on('click', function(){
    var ans = $(this).attr('id');
    console.log(ans);
    //return ans; How to send this to Server??????????
  });
};

var ajaxLoading = function(b){
  if( b ){
    $('<div id="ajaxLoader">').css({
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 2147483647,
      color: 'white'
    }).html('Fragen werden geladen...').appendTo('body');
  }else{//zerstöre Overlay
    $('#ajaxLoader').remove();
  }
};

var missingName = function(b){
    $('<div id="missingName">').css({
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 2147483647,
      color: 'white'
    }).html('Bitte gib einen Namen ein').appendTo('body');
    $('<br>').appendTo('#missingName');
    $('<button>')
      .html('OK')
      .on('click',function(){
        $('#missingName').remove();
      })
      .appendTo('#missingName');
};
