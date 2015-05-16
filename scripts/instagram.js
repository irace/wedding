function instagram_posts (callback) {
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

    callback(filtered_posts);
  });
}

