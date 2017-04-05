QUnit.test('Framework Integration', function(assert){
  assert.ok(typeof $ !== 'undefinded', 'jQuery bzw. $ gibts');
});

QUnit.test('preload',function(assert){

  var bilder = preLoader();
  console.log(bilder);
  var anzahl = bilder.length;
  var bild = bilder.url;

  assert.ok(typeof new preLoader() == 'object', 'Preloader liefert Objekt');
  assert.ok(bilder.length !== 0, 'es sind Bilder da');

  assert.equal(bilder.length,anzahl,'Progressbar steps definiert');

  assert.ok(bild == anzahl+1,'letztes Bild erreicht gehe zu erstem Bild bei rechts');

  assert.ok(bild == -1, 'erstes Bild erreicht gehe zu letzten Bild bei links');
});

QUnit.module("Setup HTML mit jQuery", {
      before:function(){
        $('<div id="ausgabe">').appendTo('#qunit-fixture');
      },
      after:function(){
        $('#ausgabe').remove();
      }
});
