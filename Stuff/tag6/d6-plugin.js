/*

  ©2017, WIFI

*/
(function($) {

  $.fn.red = function( options ) {

    var settings =  $.extend({
      r:150,
      g:0,
      b:0
    },options);

    return this.each( function() {
      if ( !$(this).hasClass( 'x' ) )
        $(this).css({ color: 'rgb('+settings.r+','+settings.g+','+settings.b+')' })
    });

    //return this; // transparente jQuery-Methode !
  }

  $.fn.formatNumbers = function( options ) {

    var settings =  $.extend({
      color:'#000000',
      fontWeight:'normal',
      underline:false,
      stroke:false
    },options);

    var wrapNumbers = function( s ) {
      var sOut = '';
      for ( var i in s ) {
        sOut += isFinite(s[i]) && s[i] != ' ' ? '<n>'+s[i]+'</n>' : s[i] ;
      }
      return sOut;
    }

    return this.each( function() {

      var neuerInhalt = wrapNumbers( $(this).html() );
      $(this).html( neuerInhalt );

      $( 'n', this ).css({
        color:settings.color,
        fontWeight:settings.fontWeight,
        textDecoration: (settings.stroke?'line-through ':'' ) + (settings.underline?'underline':''),
        /*borderBottom:settings.underline?'1px solid '+settings.color:''*/
      })

    });


  }



}( jQuery ));
