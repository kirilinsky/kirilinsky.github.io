<?php 

	$name = $_POST['name'];
	$number = $_POST['number'];
	$email = $_POST['email'];
	$name = htmlspecialchars($name);
	$number = htmlspecialchars($number);
	$email = htmlspecialchars($email);
	$name = urldecode($name);
	$number = urldecode($number);
	$email = urldecode($email);
	$dt = date('Y-M-d');

	file_put_contents('scores.txt', "$dt name: $name, score: $score, money: $money \r", FILE_APPEND);
	echo 'good';

