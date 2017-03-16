<?php
  header( 'Access-Control-Allow-Origin: *' );
  header( 'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept' );

  $req = json_decode( file_get_contents('php://input') );

  echo '{"x":'.$req->x.'}';
