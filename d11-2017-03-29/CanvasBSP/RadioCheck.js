/*
Globale Variablen,Objekte
*/

/*
Document Ready
*/
$(document).ready(function(){

});

//Begin PlugIn
(function($){
  "use strict";
  /*
  Design für Radiobuttons
  */
  $.fn.makeNiceRadio = function(options){
    var settings = $.extend({
      width:25,
      height:25,
      bordercolor: 'red',
      form: 'rect',
      fill: 'cross'
    },options);

    this.css({
              'marginLeft':settings.width,
              'marginBottom':settings.height});

    this.each(function(){

      var canvas =$('<canvas>')
        .attr('width',settings.width)
        .attr('height',settings.height);
      canvas.css({'borderColor':settings.bordercolor,
                  'position': 'absolute',
                  'zIndex':9999})
      var ctx = canvas.get(0).getContext('2d');

      if(settings.form == 'round'){
        canvas.css('borderRadius', settings.width/2)
      }
      if(settings.bordercolor == ''){
        canvas.css('borderColor', '')
      }

      /*Gehört in einen EventLisener*/
      if(settings.fill == 'cross'){
        ctx.strokeStyle = 'green';
    		ctx.lineWidth = 2;
        ctx.beginPath();
    		ctx.moveTo(2,2);
    		ctx.lineTo(23,23);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
    		ctx.moveTo(2,23);
    		ctx.lineTo(23,2);
        ctx.closePath();
        ctx.stroke();
      }
      if(settings.fill == 'circle'){
        ctx.strokeStyle = 'green';
        ctx.fillStyle = 'green'
    		ctx.lineWidth = 2;
        ctx.beginPath();
    		ctx.arc(settings.width/2,settings.height/2,settings.width/4, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      }

      $(this).parent().prepend(canvas);
    });

    return this;
  }
}(jQuery));
//End PlugIn

/*
*/
