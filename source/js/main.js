'use strict';

var btns = document.querySelectorAll('.change button');
var showBlocks = document.querySelectorAll('.show-block');

var makeActive = function (index) {
  btns[index].addEventListener('click', function () {
    document.querySelectorAll('.change button').forEach(n => n.classList.remove('active'));
    this.classList.toggle('active');
    document.querySelectorAll('.show-block').forEach(n => n.classList.remove('active'));
    showBlocks[index].classList.toggle('active');
  });
};

for (var i = 0; i < btns.length; i++) {
  makeActive(i);
}

// mobile-menu
var openMobileMenu = function () {
  var burger = document.querySelector('.burger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileClose = document.querySelector('.mobile-menu__close');
  var bodyNoActive = document.querySelector('body');
  burger.addEventListener('click', function () {
    mobileMenu.classList.add('active');
    bodyNoActive.style.overflow = "hidden";
  });
  mobileClose.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    bodyNoActive.style.overflow = "visible";
  });
}

openMobileMenu();

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// init carousel
$(document).ready(function () {
  $('.slider1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navigationText: ["", ""],
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      1000: {
        items: 2
      },
      1500: {
        items: 4
      }
    }
  });

  $('.slider2').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navigationText: ["", ""],
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      769: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });

  $('.slider3').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navigationText: ["", ""],
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      1000: {
        items: 4
      },
      1500: {
        items: 6
      }
    }
  });

  $('.slider4').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navigationText: ["", ""],
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      769: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  $('.slider5').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navigationText: ["", ""],
    navText: ['', ''],
    margin: 35,
    responsive: {
      0: {
        items: 2
      },
      769: {
        items: 3
      },
      1200: {
        items: 6
      }
    }
  });
});

// tab
function openProject(evt, projectName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.className += " active";
}

//slick 
$(document).ready(function () {
  $('.slick-slider').slick({
    asNavFor: '.slick-slider-vertical',
  });
});

$(document).ready(function () {
  $('.slick-slider-vertical').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    autoplay: false,
    asNavFor: '.slick-slider',
  });
});

$(window).on('resize', function () {
  var heightHeader = $('.header-inner').height();
  var height = $(window).height() - heightHeader - 1;
  $('.home .pictures').css('height', height + 'px');
}).trigger('resize');