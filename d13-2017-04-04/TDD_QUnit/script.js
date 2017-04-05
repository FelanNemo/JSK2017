document.write('<script src="jquery-3.1.1.min.js"></script>');

var add = function(a,b){
  a = a.toString().replace(',','.') * 1;
  b = b.toString().replace(',','.') * 1;
  return a+b;
}

var outputAdd = function(x,y) {
  document.getElementById('ausgabe').innerHTML = add(x,y);
}

var outputAddMitjQuery = function(x,y) {
  $('#ausgabe').html(add(x,y));
}

var createNumber = function () {
  //var howMany = zahlen.length();
  var fn = 'a'.charCodeAt(0);
  var obj = {};

  arguments = Array.prototype.sort.call(arguments);

  if( arguments.length == 0){
    throw "Error: keine Werte";
  }


  for(var i in arguments){
    if(isNaN(arguments[i])) {
      throw "Error: nicht nummerischer Wert";
    }
    obj[String.fromCharCode(fn)] = arguments[i];
    fn++;
  }

  return obj;
}


var zeitVerzögert = function(callback) {
  setTimeout( function () {
    callback('OK');
  }, 1000)
}
