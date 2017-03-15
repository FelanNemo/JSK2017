/*************************
 * Gobale Variablen
 *************************/
var user = {
  name: '',
  geb: '',
  plz:0000,
  ort: '',
  email: '',
  checkForm:function(art, inhalt, id){
    return new Promise(function(res, rej) {
      $.ajax({
        url: 'http://wifi.1av.at/516/tn/userdata.php?function=check',
        data:{type:art, value:inhalt},
        success: function(d){
          if(d.result == 'ok'){
            res();
          } else {
            rej(d.code);
          }
        }
      });
    }).catch(function(){$(id).addClass('error');});
  },
  checkData:function( email){
    return new Promise(function(res, rej) {
      $.ajax({
        url: 'http://wifi.1av.at/516/tn/userdata.php?function=check&name=anna',
        data:{type:'exists', value:email},
        success: function(d){
          //if(d.result == 'ok'){
          /*  res();
          }else{
            rej( );
          }*/
        }
      });
    });
  },
  save:function(){
    return new Promise(function(res, rej) {
      $.ajax({
        url: 'http://wifi.1av.at/516/tn/userdata.php?function=save&name=anna',
        data:{value:JSON.stringify({
          name:user.name,
          geb:user.geb,
          plz: user.plz,
          email:user.email
        })},
        success: res,
        error: rej
      });
    })
  },
  empty:function(){

  }
}
 /*************************
  * Functions
  *************************/
$.ajaxSetup({
  type: 'POST', // kann entweder als POST oder GET sein,
  dataType: 'json'
});

//$.ajaxURL = function(s){return 'http://wifi.1av.at/516/tn/userdata.php?function=' + s};
var alteUser
$.ajax({
  url: 'http://wifi.1av.at/516/tn/userdata.php?function=get&name=anna',
  success:function(d){
    alteUser = d.data.users;
    console.log(alteUser);
  }
});

$( document ).on( 'submit', '#user', function(e) {
  e.preventDefault();

  user.name = $('#name').val();
  user.geb = $('#geb').val();
  user.plz = $('#plz').val();
  user.email = $('#email').val();

  console.log(user);

  var checkName = function(){
      return user.checkForm('string', user.name,'#name')
  }

  var checkGeb = function(){
    return user.checkForm('date', user.geb,'#geb');
  }

  var checkPLZ = function(){
    return user.checkForm('number', user.plz, '#plz');
  }

  var checkEmail = function(){
    return user.checkForm('email', user.email,'#email');
  }

  $('error').removeClass('error');

  checkName()
    .then(checkGeb)
    .then(checkPLZ)
    .then(checkEmail)
    .then(function(){
      if($('.error').length == 0 ){
        user.save()
        .then(function(){alert('gespeichert')})
        .catch(function(){alert('da ging was schief')});
      }
    });
});

$(document).ready(function(){

})
