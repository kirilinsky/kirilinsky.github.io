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
	$dt = date('Y-M-d h:m');

	
	mail("kirill.ilinsky@yandex.ru", "Заявка с сайта" , "Здравствуйте Олеся,\r\n Нам написал $name и попросил связаться с ним по его контактным данным: \r\n - Телефон: $number \r\n - Почта: $email. \r\n Письмо сгенерировано автоматически $dt" , "From: admin@kirilinsky.ru \r\n");