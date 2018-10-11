<?php 
  $flag = 1;  
  include "includes/header.php";?>
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

      <div class="section" id="overview">
        <div class="circleart" title="overview"><i class="fa fa-eye" aria-hidden="true"></i></div>
        <div class="sectionheader">обзор</div>
            <div class="sectionpreview" style="min-height: 865px;">

                <?php 
                   include "includes/preview4.php";
                   include "includes/preview5.php";
                   include "includes/preview1.php";
                   include "includes/preview3.php";
                   include "includes/preview2.php";

                ?>

           </div>
        </div>
      <div class="section" id="proskills">
        
        <div class="circleart" id="skillscircle" title="skills">
            <i class="fa fa-cogs" aria-hidden="true"></i>
        </div>
        <div class="sectionheader">навыки</div>
        <?php include "includes/skills.php"; ?>
    
      </div>
      <div class="section" id="sendto">
        <div class="circleart" title="send to">
          <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
        </div>
        <div class="sectionheader">написать</div>
        <div class="sectionbody">
          <?php include "includes/form.php"; ?>
         
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