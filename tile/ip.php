<?php 

	 $name = $_POST["name"];
                              $phone = $_POST["phone"];
                              $name = htmlspecialchars($name);
                              $phone = htmlspecialchars($phone);
                              $name = urldecode($name);
                              $phone = urldecode($phone);
                              $phone = trim($phone);
                              
                              file_put_contents('clients.txt', "$dt - клиент: $name, оставлял заявку, его номер: $phone \r", FILE_APPEND);
	
                                


?>