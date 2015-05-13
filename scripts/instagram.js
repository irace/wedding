$(function () {
  var url_blacklist = [
    'https://instagram.com/p/sncRYbH4a9/',
    'https://instagram.com/p/slmdSgH4at/',
    'https://instagram.com/p/sllwrXH4Zj/',
    'https://instagram.com/p/slleyqn4Y8/',
    'https://instagram.com/p/sllUqHn4Yh/',
    'https://instagram.com/p/sllGxnn4YK/',
    'https://instagram.com/p/slk5ukH4Xw/',
    'https://instagram.com/p/slkM60H4Wn/',
    'https://instagram.com/p/sljO-mH4VW/',
    'https://instagram.com/p/slhe39n4Sz/',
    'https://instagram.com/p/slhKicH4SX/',
    'https://instagram.com/p/slgTqQH4RX/',
    'https://instagram.com/p/dGXQp1xEow/',
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
