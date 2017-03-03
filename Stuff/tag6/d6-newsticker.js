;(function($){
  "use strict";

  $.fn.newsticker = function( options ) {
    var settings = $.extend({
      width:300,
      speed:10
    },options);

    return this.each(function(i){
      /* Wrapper vom Newsticker */
      $(this).css({
        width:settings.width,
        /*overflow:'hidden',*/
        position:'relative',
        border:'1px solid #000',
        height:'1.25em'
      });

      /* Runner Text */
      var runner = $( '<div>' )
        .html( $(this).html() )
        .css({
          position:'absolute',
          border:'1px solid #F00',
          left:settings.width,
          'white-space':'nowrap'
        });

      $( this ).empty().append( runner );

      var run = function() {
        runner.css( { left:settings.width });
        runner.animate({
          left:-runner.width()
        },5000,'linear',run);
      }
      run();
    });
  }

}(jQuery));
