/***************************
Globale Variablen
***************************/

/***************************
Start Function
***************************/
$(document).ready(function(){
  /*$('nav ul li')
    .on('mouseenter', function(){
      $('ul', this).show();//JQuery Function for display:block ebenfalls toggle
    })
    .on('mouseleave', function(){
      $('ul', this).hide();
    });*/

    $('nav ul li')
      .on('click', function(){
        $('ul', this).fadeIn();
      })
      .on('mouseleave', function(){
        $('ul', this).fadeOut()
      });
});
