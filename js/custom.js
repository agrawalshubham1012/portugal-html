'use strict';

$(document).ready(function () {
  window.addEventListener('scroll', function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('nav').addClass('stick_header');
    } else {
      $('nav').removeClass('stick_header');
    }
  });
  });

  $("#menu__toggler").click(function () {
    $(this).toggleClass("menuToggled")
    $(".mobile-nav").toggleClass("openMenu")
  })
  $(".close-nav").click(function () {
    $(".mobile-nav").removeClass("openMopenSort-btnenu")
  })
  $(".mobile-nav-menu li a").click(function () {
    $(this).toggleClass("clicked")
    $(this).parent().toggleClass("open-mobile-submenu")
  })

  $('.forgot-password a').click(function () {
    $('#user_modal').modal('toggle');
  });

  $('.backToLogin').click(function () {
    $('#forget_pass_modal').modal('toggle');
  });

  $(".mega-headings-lg").hover(function () {
    $(".mega-headings-lg").removeClass("active_menu_item")
    $(this).toggleClass("active_menu_item");
 });
 
 


 

});

