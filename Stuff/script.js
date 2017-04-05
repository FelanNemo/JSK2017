var getCalc = function(a,b,c) {
  //var a = 0,b = 0, c = 0, erg = 1000, temp = 0, temp2 = 0;
  var o = {a:1, b:1, c:1};
  var c = 0;
  //a+b+c == 1000
 //a*a + b*b == c*c
 //alle Zahlen

for( o.a = 4; o.a<999; o.a+=4){
  for( o.b = 3; o.b<1000-o.a; o.b+=3){
    //for( var k = 1; k<999; k++){
    o.c = 1000 -o.a -o.b;
    c++;
      if(/*i+j+k == 1000 &&*/  o.a*o.a + o.b*o.b== o.c*o.c){

        console.log(c);
        return o;
      }
    //}
  }
}




}
