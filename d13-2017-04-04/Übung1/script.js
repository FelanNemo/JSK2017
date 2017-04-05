var preLoader = function () {

  var url = 'http://wifi.1av.at/516/alex/showimage.php?id='; //1 ... 5
  var min = 1;
  var max = 5;
  var temp;

  var myImage = {
    url: '',
    pos:0
  };
  var images = [];


  for(var i = min; i<= max; i++){
    myImage = new Object();
    myImage.url = url + i;
    myImage.pos = i;
    //console.log(myImage);
    images.push(myImage);
  }
  return images;
};
