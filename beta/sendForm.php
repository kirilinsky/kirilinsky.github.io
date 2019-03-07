<?php


	if (isset($_POST['username'])){
	        $name = $_POST['username'];
	        $number = $_POST['number'];
	        $email = $_POST['email'];
	        $from = 'orders@pomogu-za-chas.ru';
	        $mailTo='kirill.ilinsky@yandex.ru';
	        $headers = "From: Александр Чернов <$from>\nReply-To: $from\n";
	        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	        $message="
	        <h1>Заявка с сайта</h1>
	        <p>Имя: $name</p>
	        <p>Контакты: $number</p>
	        <p><a href='mailto: $email'>написать письмо на $email</a></p>
	        ";
	         
	        wp_mail($mailTo,"Форма обратной связи",$message,$headers);
	        } 