$('<div> Hallo JS</div>').appendTo('body');

//chrome.storage.local.set({x:1}) <-- ACHTUNG async
//chrome.storage.local.get(['x'],function(d){alert(d.x)}) <-- ACHTUNG async
var ergebnistext;
//console.log(ergebnistext);

$(document).on('click','button', function (e) {
  e.preventDefault();
  ergebnistext  = $('#name').val();
  console.log(ergebnistext);
  chrome.storage.local.set({user:ergebnistext},function () {
    console.log('Name gespeichert!');
  });
  $('#name').val('');
  $('span').html(ergebnistext);
});



//
