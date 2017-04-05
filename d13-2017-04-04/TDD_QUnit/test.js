QUnit.test('mein erster Test', function(assert){
  assert.ok(1 == '1', 'automatische Typumwandlung');
  assert.ok(1 !== '1', 'nicht exakt gliech');
});

QUnit.test('Rechenfunktionen',function(assert){
  assert.equal(add(1,2),3,'Funktion Addieren');
  assert.equal(add('1','2'),3,'Funktion Addieren mit automatischer Typumwandlung');
  assert.ok(isNaN(add('a',1)),'Addieren mit nicht nummerischen Wert');
  assert.equal(add(-1,2),1,'Addieren mit negativen Zahlen');
  assert.equal(add('1,5',1),2.5,'Addieren mit Kommerzahlen')
});

QUnit.test('Objektest', function(assert){
  assert.notEqual(createNumber(1,2,3),{a:1,b:2,c:3}, 'Zahlenobjekt');
  assert.deepEqual(createNumber(1,2,3),{a:1,b:2,c:3}, 'Zahlenobjekt');
  assert.deepEqual(createNumber(1,2),{a:1,b:2}, 'Zahlenobjekt zwei Zahlen');
  assert.deepEqual(createNumber(1,2,3,4,5),{a:1,b:2,c:3,d:4,e:5}, 'Zahlenobjekt viele Zahlen');
  assert.deepEqual(createNumber(4,5,1,3,2),{a:1,b:2,c:3,d:4,e:5}, 'Zahlenobjekt viele Zahlen sortiert');
  //assert.deepEqual(createNumber(),{}, 'leeres Zahlenobjekt');
  assert.throws(function(){createNumber();},/Error/, 'kein Wert');
  assert.throws(function(){createNumber(1,2,'a',4);},/Error/, 'nicht nummerischer Wert');
});

QUnit.test('Framework Integration', function(assert){
  assert.ok(typeof $ !== 'undefinded', 'jQuery bzw. $ gibts');
})

QUnit.test('asynchrones Script', function(assert) {
  var done = assert.async();
  zeitVerzögert(function (response) {
    assert.equal(response,'OK', 'asynchroner Callback tut was er tut');
    done();
  });
});

QUnit.module("Setup HTML", {
    before:function(){
      var div = document.createElement('div');
      div.id = 'ausgabe';
      document.getElementById('qunit-fixture').appendChild(div);
    },
    after:function(){
      document.getElementById('qunit-fixture').innerHTML = '';
    }
});

QUnit.test("Addieren mit Ausgabe",function(assert){
  outputAdd(1,2);
  assert.equal(document.getElementById('ausgabe').innerHTML, '3', "Ausgabe Ergebnis Addieren");
});

QUnit.module("Setup HTML mit jQuery", {
      before:function(){
        $('<div id="ausgabe">').appendTo('#qunit-fixture');
      },
      after:function(){
        $('#ausgabe').remove();
      }
});

QUnit.test("Addieren mit Ausgabe",function(assert){
  outputAddMitjQuery(1,2);
  assert.equal($('#ausgabe').html(), '3', "Ausgabe Ergebnis Addieren");
});
