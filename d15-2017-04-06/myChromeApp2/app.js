$( 'body' ).on( 'dragenter dragleave dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
});

$( 'body' ).on( 'drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log( e );

});
/*
$('body').on('dragenter dragleave dragover', function(e){
  e.preventDefault();
  e.stopPropagation();
  //console.log(e);
});

$('body').on('drop', function(e){
  e.preventDefault();
  e.stopPropagation();

/*  var items = e.originalEvent.dataTransfer;
  for(var i in items){
    var item = items.item[i];
    if(item.kind == 'file' && item.type.match('image/*') && item.webkitGetAsEntry()){
      var meinFileEntry = item.webkitGetAsEntry();
      break;
    }
  }
  meinFileEntry.file(function(file){
    var url = URL.createObjectURL(file);
    console.log(url);
  });
  //console.log(e);* /
});
/*.on('drop',function(e){
  e.preventDefault();
})*/
