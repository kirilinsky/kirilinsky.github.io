<?php 
  $flag = 4;
  include "includes/header.php";
 
  ?>
  <div class="container1">
    <div class="leftside">
      <div class="section">
        <div class="photobox">
          <a href="#top" class="go_to"><div class="circle"></div></a>
        </div>
        <div class="sectionheader">kirill ilinsky</div>
        <div class="probox">web developer</div>
      </div>
      <div class="section">
        <div class="circleart" title="Bio&Contacts"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
        <div class="sectionheader">кточто</div>
        <div class="sectionbody">
          <?php include "includes/bio.php"; ?>
        </div>
      </div>

      <div class="section">
          
          <div class="circleart" title="Опыт работы"><i class="fa fa-briefcase" aria-hidden="true"></i></div>
        <div class="sectionheader">опыт</div>
        <div class="sectionbody">
            <?php include "includes/work.php"; ?>
        </div>
    

      </div>

    </div>
    <div class="betline"></div>

    <div class="rightside">
      
      <div class="section" id="sendto">
        <div class="circleart" title="send to"><i class="fa fa-envelope-open-o" aria-hidden="true"></i></div>
        <div class="sectionheader">написать</div>
        <div class="sectionbody">

          <p class="success elua bg-success" style="text-align: center;font-size: 1.2rem;">
          <?php  
                  if (!empty($_POST["g-recaptcha-response"]))  { 
                    $text = $_POST["text"];
                    $fio = $_POST["name"];
                    $email = $_POST["email"];
                    $fio = htmlspecialchars($fio);
                    $text = htmlspecialchars($text);
                    $email = htmlspecialchars($email);
                    $fio = urldecode($fio);
                    $text = urldecode($text);
                    $email = urldecode($email);
                    $fio = trim($fio);
                    $email = trim($email);
                    
                    if (mail("kirill.ilinsky@gmail.com", "Обратная свзяь от $fio" , "Привет, нам написал $fio. \n Он пишет, что: $text .Его почта: .$email" , "From: ceo@kirilinsky.ru \r\n")) { 
                      echo  "<br>Спасибо, <b>$fio</b>, Ваше обращение успешно отправлено. <br> <sub><a href='/#top' title='назад'>вернуться назад </a></sub>";
                    } else {
                      echo "Возникла ошибка, попробуйте <a href='/'>еще раз</a>"; 
                    }
                  } else {
                  echo "Вы не прошли валидацию reCaptcha, попробовать <a href='/#sendto'> снова</a>?";   
                }
             
              ?>
         </p>
         
        </div>

        
      </div>
    </div>
  </div>


<script src="jq_1.12/jq1_12.js"></script>
<script src="magnificPOPUP/jquery.magnific-popup.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="fotorama-4.6.4/fotorama.js"></script>
<script src="js/wow.min.js"></script>
<script>
  $(document).ready(function() {
    $('.linkto').magnificPopup({type:'image'});
  });
  $(document).ready(function(){
    $('.go_to').click( function(){ 
  var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
      return false; 
    });
});
        $(document).ready(function() {
          $("head").append("<link rel='stylesheet' type='text/css' href='magnificPOPUP/magnific-popup.css' />");
          $("head").append("<link rel='stylesheet' type='text/css' href='fotorama-4.6.4/fotorama.css' />");
          $("head").append("<link rel='stylesheet' type='text/css' href='css/hint.min.css' />");
          $("head").append("<link rel='stylesheet' type='text/css' href='css/animate.css' />");
          $("head").append("<link rel='stylesheet' type='text/css' href='css/font-awesome.min.css' />");
      });
</script>
<script>
              new WOW().init();
</script>
</body>
</html>