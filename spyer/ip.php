<?php


$dt = date('Y-m-d');
$client  = @$_SERVER['HTTP_CLIENT_IP'];
$forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
$remote  = @$_SERVER['REMOTE_ADDR'];
if(filter_var($client, FILTER_VALIDATE_IP)) $ip = $client;
  elseif(filter_var($forward, FILTER_VALIDATE_IP)) $ip = $forward;
  else $ip = $remote;
  file_put_contents('dse.txt', "______________ $dt ||||| ip: $ip \r _____________________ \r\n", FILE_APPEND);