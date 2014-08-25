function enable_sticky_navigation() {
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
  }
}

function populate_days_until() {
  $('#days-until').text(Math.round((new Date(2015, 4, 23) - new Date()) / 1000/60/60/24));
}

function attach_nav_scroll_handlers() {
  // Copied from Zack
  $('.nav a[href*=#]').bind('click', function(e) {
    e.preventDefault();

    var target = $(this).attr("href");

    var nav_height = 60;

    $('body, html').animate({ scrollTop: $(target).offset().top - nav_height }, 700, 'easeInOutQuart', function () {});
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

    var make_photo_cols_square = function () {
      $('.photo-col').each(function (index) {
        var $el = $(this);

        // This won't update when say, a browser window is resized
        $el.css({ 'height': $el.width() + 'px' });
      });
    };

    make_photo_cols_square();
    $(window).resize(make_photo_cols_square);
  });
}

function setup_rsvp_validation() {
  $('.attendance-choice-accept').change(function () {
    enable_fields('.attending-fields');
  });

  $('.attendance-choice-decline').change(function () {
    disable_fields('.attending-fields');
  });

  $('.guest-choice-yes').change(function () {
    enable_fields('.guest-fields');
  });

  $('.guest-choice-no').change(function () {
    disable_fields('.guest-fields');
  });

  function enable_fields(selector) {
    $(selector).css({'opacity': 1});
    $(selector).find('input').prop('disabled', false);
  }

  function disable_fields(selector) {
    $(selector).css({'opacity': 0.2});
    $(selector).find('input').prop('disabled', true);
    $(selector).find('input[type=radio]').prop('checked', false);
    $(selector).find('input[type=text]').val('');
  }
}