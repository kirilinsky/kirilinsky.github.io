<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Didact+Gothic" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/_media.css">
  <link rel="icon" href="favicon.png" type="ico/png">
  <title>Kirilinsky - Potfolio Page | Страница портфолио </title>


  <!-- мета -->

  <meta name="keywords" content="Сделать сайт, Сайт, Лэндинг, лендинг, заказать лэндинг, landingpage, landing-page" />
  <meta name="description" content="Страница-портфолио веб-разработчика Kirill Ilinsky. Вы можете заказать любую страницу." />

  <!-- Yandex.Metrika counter -->
  <script>
      (function (d, w, c) {
          (w[c] = w[c] || []).push(function() {
              try {
                  w.yaCounter48595934 = new Ya.Metrika({
                      id:48595934,
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                  });
              } catch(e) { }
          });

          var n = d.getElementsByTagName("script")[0],
              s = d.createElement("script"),
              f = function () { n.parentNode.insertBefore(s, n); };
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://mc.yandex.ru/metrika/watch.js";

          if (w.opera == "[object Opera]") {
              d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
      })(document, window, "yandex_metrika_callbacks");
  </script>
  


</head>
<body>
  <noscript><div><img src="https://mc.yandex.ru/watch/48595934" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->
  <header class="header" id="top">
    <div class="menuwrap">
      <div class="menuitem label">
        <a id="logo" href="/">
          <div class="itemwrap">
            <img src="logo.svg"  alt="logo"  style="max-width:165px; color:#fff;">
          </div>
        </a>
      </div>
      <div class='menuitem links'>
        <?php
         if($flag == 1){
           echo("
             <a href='#overview' class='go_to'>обзор </a>
             <a href='#proskills' class='go_to'> навыки </a>
             <a href='#sendto' class='go_to'> написать</a>
             ");
           } else {
             echo(" ");       
           }
          ?>
        
      </div>
    </div>
  </header>