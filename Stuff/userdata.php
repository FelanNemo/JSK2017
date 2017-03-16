<?php
  header( 'Access-Control-Allow-Origin: *' );
  header( 'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept' );
  header( 'Content-Type:application/json');

  function err( $code ) {
    die( '{"result":"err", "code":"'.$code.'"}' );
  }

  function s( $b, $data='' ) {
    if ( $b )
      die( '{"result":"ok"'.($data!=''?',"data":'.json_encode($data):'').'}' );
    else
      err( 406 );
  }

  if ( isset( $_GET['testmode'] ) && $_GET['testmode'] == 1 ) {
    $_POST = $_GET;
  }

  if ( !isset( $_GET['function'] )) {
    err( 404 );
  }



  switch( $_GET['function'] ) {
    case "check":
      if ( !isset( $_POST['type']) || !isset( $_POST['value']) ) err( 400 );
      $v = $_POST['value'];
      switch(  $_POST['type'] ) {
        case 'string':
          s(strlen( $v ) > 0 );
        break;
        case 'number':
          s( is_numeric( $v ) );
        break;
        case 'date':
          $date = explode( '.', $v );

          s( count($date) == 3 && checkdate( $date[1], $date[0], $date[2] ) );
        break;
        case 'email':
          s( strpos( $v, '@' ) > 0 );
        break;
        case 'exists':

          $name_allowed=['andreas','anna','bettina','josef','kemir','milat','oliver','rene','alex'];
          if ( !isset( $_GET['name'] ) || !in_array( $_GET['name'], $name_allowed )) {
            err( 410 );
          }
          $string = file_get_contents("../". $_GET['name']."/user.json");
          s( strpos( $string, $v) > 0 );
        break;
        default:
          err(400);
      }
    break;
    case "save":
      $name_allowed=['andreas','anna','bettina','josef','kemir','milat','oliver','rene','alex'];
      if ( !isset( $_GET['name'] ) || !in_array( $_GET['name'], $name_allowed )) {
        err( 410 );
      }
      $string = file_get_contents("../". $_GET['name']."/user.json");
      $users = json_decode($string, true);

      if ( !isset( $_POST['value']) ) err( 400 );
      $v = $_POST['value'];
      $jv =  json_decode( $v );
      if ( is_null( $jv) ) err(500);
      $users['users'][] = $jv;
      file_put_contents("../". $_GET['name']."/user.json", json_encode( $users ) );
      s(true, json_decode( $v ) );
    break;
    case "empty":
      $name_allowed=['andreas','anna','bettina','josef','kemir','milat','oliver','rene','alex'];
      if ( !isset( $_GET['name'] ) || !in_array( $_GET['name'], $name_allowed )) {
        err( 410 );
      }
      file_put_contents("../". $_GET['name']."/user.json", '{"users":[]}' );
      s(true);

    break;
    case "get":
      $name_allowed=['andreas','anna','bettina','josef','kemir','milat','oliver','rene','alex'];
      if ( !isset( $_GET['name'] ) || !in_array( $_GET['name'], $name_allowed )) {
        err( 410 );
      }
      $string = file_get_contents("../". $_GET['name']."/user.json");
      $users = json_decode($string, true);
      s(true, $users );

    break;
    default:
      err( 404 );

  }
