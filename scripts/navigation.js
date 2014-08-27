$(function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    // Copied from Zack

    $('.nav').waypoint('sticky', {
      offset: 60
    });

    $(window).scroll(function() {
      if ( $(this).scrollTop() > 50 ) {
        $('.back-top').fadeIn(400);
      } 
      else {
        $('.back-top').fadeOut(400);
      }
    }); 

    skrollr.init();
  }

  $('.nav a[href*=#]').bind('click', function(e) {
    e.preventDefault();

    var target = $(this).attr("href");

    var nav_height = 60;

    $('body, html').animate({ scrollTop: $(target).offset().top - nav_height }, 700, 'easeInOutQuart', function () {});
  });  
});
