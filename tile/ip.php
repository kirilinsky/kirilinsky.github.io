<?php 

	$name = $_POST['name'];
	$phone = $_POST['score'];
	$dt = date('Y-M-d');

	file_put_contents('clients.txt', "$dt - клиент: $name, оставлял заявку, его номер: $phone \r", FILE_APPEND);
	mail("kiril.ilinsky@gmail.com", "Обратная свзяь от $name" , "Добрый день, нам написал $name. \n Он ждет звонка по номеру: $phone" , "From: admin@plitochnik-rnd.ru \r\n")

/*"dudinov_d@mail.ru"*/

