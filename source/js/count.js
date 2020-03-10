$(document).ready(function () {
  // счетчик
  function countup(className) { //className - имя класса, в котором есть число
    var countBlockTop = $("." + className).offset().top; //смещение блока с числом относительно верхнего края	
    var windowHeight = window.innerHeight; //высота окна браузера
    var show = true; // отвечает, что если один раз счетчик сработает, больше не срабатывал

    $(window).scroll(function () {
      if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
        show = false; //если мы видим число, то больше его не надо показывать

        $('.' + className).spincrement({ //вызов плагина с параметрами 
          from: 1, //начинать с 1
          duration: 4000, //задержка счетчика
        });
      }
    })
  }
  //вызов счетчика
  $(function () {
    countup("count");
    countup("count2");
    countup("count3");
    countup("count4");
  });
});