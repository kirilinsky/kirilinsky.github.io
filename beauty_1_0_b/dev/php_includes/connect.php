<?php
//connect

$host_name =  "mysql95.1gb.ru"; 
$admi_name = "gb_x_inhab78f"; 
$pass_name = "c9eb6zbaepsg"; // пароль

$bd_name = "gb_x_inhab78f"; 


// Подключение к Базе Данных
$connection = mysql_connect("$host_name", "$admi_name", "$pass_name") or die ("Could not connect: ".mysql_error());
// Выбираем Базу Данных
mysql_select_db("$bd_name") or die (mysql_error());
// задаем кодировку для БД UTF-8
mysql_query('SET NAMES utf8;');

if(!$connection) echo 'SMTH WRONG!';

?>
