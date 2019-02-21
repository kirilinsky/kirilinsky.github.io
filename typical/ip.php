<?php 
              


	             $type = $_POST["type"];
               $values = $_POST["values"];
               $adaptive = $_POST["adaptive"];
               $feedback = $_POST["feedback"];
               $mailFeedback = $_POST["mailFeedback"];
               $needHelp = $_POST["needHelp"];
               $description = $_POST["description"];
               $amount = $_POST["amount"];
               $email = $_POST["email"];

               $type = htmlspecialchars($type);
               $values = htmlspecialchars($values);
               $adaptive = htmlspecialchars($adaptive);
               $feedback = htmlspecialchars($feedback);
               $mailFeedback = htmlspecialchars($mailFeedback);
               $needHelp = htmlspecialchars($needHelp);
               $description = htmlspecialchars($description);
               $amount = htmlspecialchars($amount);
               $email = htmlspecialchars($email);

               $type = urldecode($type);
               $values = urldecode($values);
               $adaptive = urldecode($adaptive);
               $feedback = urldecode($feedback);
               $mailFeedback = urldecode($mailFeedback);
               $needHelp = urldecode($needHelp);
               $description = urldecode($description);
               $amount = urldecode($amount);
               $email = urldecode($email);

               $type = trim($type);
               $values = trim($values);
               $adaptive = trim($adaptive);
               $feedback = trim($feedback);
               $needHelp = trim($needHelp);
               $amount = trim($amount);
               $dt = date('d-m-Y H:i');
               mail("kirill.ilinsky@gmail.com", "Заявка с сайта" , "Здравствуйте,\r\nна нашем сайте кто-то сгенерировал смету со следующими параметрами\r\n*тип $type\r\n*тип $values\r\n*тип $adaptive\r\n*тип $feedback\r\n*тип $mailFeedback\r\n*тип $needHelp\r\n*тип $description\r\n*тип $amount  и попросил связаться с ним по его контактным данным:\r\n* Почта: $email. \r\n<a href='mailto:$email'>Написать ответ</a>\r\nПисьмо сгенерировано автоматически $dt" , "From: admin@kirilinsky.ru \r\n"); 

               







?>