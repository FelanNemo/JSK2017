QUnit.test('Rechenfunktionen',function(assert){
  var a,b,c,x,start,time;

  start = Date.now();
  x = getCalc();
  time = start - Date.now();

  console.log(x);
  a = x.a;
  b = x.b;
  c = x.c

  assert.equal(a+b+c,1000,'a+b+c 1000');

  assert.ok(isFinite(a)&&a > 0, 'eine ganze positive Zahl');
  assert.ok(isFinite(b)&&b > 0, 'eine ganze positive Zahl');
  assert.ok(isFinite(c)&&c > 0, 'eine ganze positive Zahl');

  assert.equal(Math.pow(a,2)+Math.pow(b,2),Math.pow(c,2),'a*a+b*b = c*c');


  assert.ok(time < 1000, 'schneller als 1s');
});
