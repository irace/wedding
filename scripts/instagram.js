$(function () {
  var url_blacklist = [
    'http://instagram.com/p/sncRYbH4a9/',
    'http://instagram.com/p/slmdSgH4at/',
    'http://instagram.com/p/sllwrXH4Zj/',
    'http://instagram.com/p/slleyqn4Y8/',
    'http://instagram.com/p/sllUqHn4Yh/',
    'http://instagram.com/p/sllGxnn4YK/',
    'http://instagram.com/p/slk5ukH4Xw/',
    'http://instagram.com/p/slkM60H4Wn/',
    'http://instagram.com/p/sljO-mH4VW/',
    'http://instagram.com/p/slhe39n4Sz/',
    'http://instagram.com/p/slhKicH4SX/',
    'http://instagram.com/p/slgTqQH4RX/',
    'http://instagram.com/p/dGXQp1xEow/',
    'http://instagram.com/p/sncRYbH4a9/',
    'http://instagram.com/p/slmdSgH4at/'
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
});
