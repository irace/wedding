$(function () {
  var url_whitelist = [
    'http://instagram.com/p/sDgb5vvu0_/'
  ];

  $.getJSON('http://gramcracker.herokuapp.com/tag/tracyandbryan', function(posts) {
    var filtered_posts = _.filter(posts, function (post) {
      return _.contains(url_whitelist, post.link)
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
