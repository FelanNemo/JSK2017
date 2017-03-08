/*
Globale Variablen
*/
var xmlDoc,kurs;
/*
Funktionen
*/
var loadPage = function(){
  var request = new XMLHttpRequest();

  request.open('get','http://wifi.1av.at/516/alex/ecb.php',true);
  ajaxLoading(true);
  request.send();

  request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 200){
      ajaxLoading(false);
      parseXML(request.responseText);
      //console.log(request.responseText);
    }
  }
  //console.log(request);
};

var parseXML = function(text) {

  xmlDoc = $.parseXML(text);
  $text = $(xmlDoc);
  kurs = $text.find('[currency="USD"]').attr('rate');
  /*var parser;

  parser = new DOMParser();
  xmlDoc = parser.parseFromString(text,"text/xml");*/

  console.log(kurs);
}

var starteUmrechnungEuro = function(e) {
  e.preventDefault();
  //console.log('Hallo du wechselst gerade!');
  var euro, usd;

  euro = $('#euro').val();
  //euro = zahlEinlesen(euro);
  //console.log('Im Euro Feld steht:'+euro);

  if(isNaN(euro)){
    $('#euro').addClass('error');
    $('#usd').val('');
    //_e('euro').setAttribute('class','error');
  } else {
    usd = euro * kurs;
    $('#euro').addClass('');
    $('#usd').val(usd);
    console.log(usd);
  }
};

var starteUmrechnungUSD = function(e) {
  e.preventDefault();

  var euro, usd;

  usd = $('#usd').val();
  //usd = zahlEinlesen(usd);


  if(isNaN(usd)){
    $('#usd').addClass('error');
    $('#euro').val('');
  } else {
    euro = usd / kurs;
    $('#euro').val(euro);
    $('#usd').addClass('');
  }
};

var ajaxLoading = function(b){
  if( b ){//erzeuge Loading Overlay
    $('<div id="ajaxLoader">').css({
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 2147483647,
      color: 'white'
    }).html('Inhalte werden geladen...').appendTo('body');
  }else{//zerstöre Overlay
    $('#ajaxLoader').remove();
  }
};

/*
window.onload
*/
$( document ).ready(function() {
  //$('#change').on('click', starteUmrechnungEuro)
  loadPage();

  var umrechnung;

  $('#euro').val('');
  $('#usd').val('');

  $('#euro').on('focus', function(){
    umrechnung  = starteUmrechnungEuro;
  });

  $('#usd').on('focus',function(){
    umrechnung  = starteUmrechnungUSD;
  });

  $('#meinForm').submit(function(e){umrechnung(e);});
});
