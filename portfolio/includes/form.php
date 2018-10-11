  <script src="https://www.google.com/recaptcha/api.js"></script>
  <form action="send.php" method="post">
            <textarea class="form-control" placeholder="Вы можете написать здесь все, что угодно." name="text"></textarea>
            <br>
            <div class="form-group">
               <label for="exampleInputName2">Ваше Имя</label>
               <input  required type="text" class="form-control" id="exampleInputName2" name="name" placeholder="Остап Бендер">
             </div>
             <div class="form-group">
               <label for="exampleInputEmail2">Ваша почта</label>
               <input required type="email" name="email" class="form-control" id="exampleInputEmail2" placeholder="mark@zukerberg.com">
             </div>
             <br>
             <div data-size="compact" style="margin:0 auto;" class="g-recaptcha" data-sitekey="6LecbGgUAAAAACXEpxc8UYw-Obqz79Wtzazlboo4"></div>
             <br>
             <button type="submit" class="btn btn-success" style="background: #64AC8F; box-shadow: 0 0 5px #64AC8F;">Отправить</button>

  </form>