$(function() {
  enable_sticky_navigation();
  populate_days_until();  
  fetch_instagram_photos();
  attach_nav_scroll_handlers();
});

function enable_sticky_navigation() {
  $('.nav').waypoint('sticky', {
    offset: 60
  });
}

function populate_days_until() {
  $('#days-until').text(Math.round((new Date(2015, 4, 23) - new Date()) / 1000/60/60/24));
}

function attach_nav_scroll_handlers() {
  // Copied from Zack
  $('.nav a[href*=#]').bind('click', function(e) {
    e.preventDefault();

    var target = $(this).attr("href");
    //animation
    $('body, html').animate({ scrollTop: $(target).offset().top }, 700, 'easeInOutQuart', function () {});
  });  
}

function fetch_instagram_photos() {
  var url_blacklist = [
    'http://instagram.com/p/dGXQp1xEow/'
  ];

  $.getJSON('http://gramcracker.herokuapp.com/tag/tracyandbryan', function(posts) {
    var filtered_posts = _.filter(posts, function (post) {
      return !_.contains(url_blacklist, post.link)
    });

    $('.instagram-photo').each(function (index) {
      if (index < filtered_posts.length) {
        var post = filtered_posts[index];

        $(this).html('<a href="' + post.link + '"><img src="' + post.photo + '"></a>');
      }
    });

    $('.photo-col').each(function (index) {
      var $el = $(this);

      // This won't update when say, a browser window is resized
      $el.css({ 'height': $el.width() + 'px' });
    });
  });
}
