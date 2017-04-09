$( 'body' ).on( 'dragenter dragleave dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
});

$( 'body' ).on( 'drop', function(e) {
  e.preventDefault();
  e.stopPropagation();

  var items = e.originalEvent.dataTransfer;

  for ( var i=0; i<items.items.length; i++ ) {
    var item = items.items[i];
    if ( item.kind == 'file' && item.type.match('image/*') && item.webkitGetAsEntry() ) {
      var meinFileEntry = item.webkitGetAsEntry();
      break;
    }
  }
  meinFileEntry.file( function(file) {
    var url = URL.createObjectURL( file );
    console.log( url );


    var img = new Image();
    img.src = url;
    img.onload = function() {
      //console.log( img.width, img.height );
      chrome.fileSystem.getDisplayPath(meinFileEntry,function(d){
      var canvas = $( '<canvas>' ).attr({width:img.width, height:img.height}).appendTo( 'body' );
      $('<div title="'+d+'">').appendTo('body').append(canvas).dialog({width:img.width, height:'auto'});
      var ctx = canvas.get(0).getContext( '2d' );
      ctx.drawImage( img, 0,0 );
      });
    }
  });
});
