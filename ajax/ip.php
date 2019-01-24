<?php 

	$name = $_POST['name'];
	$score = $_POST['score'];
	$money = $_POST['money'];
	$dt = date('Y-M-d');

	file_put_contents('scores.txt', "$dt name: $name, score: $score, money: $money \r", FILE_APPEND);
	echo 'good';

