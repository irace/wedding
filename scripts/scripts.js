$(function() {
  $('.nav').waypoint('sticky', {
    offset: 60
  });

  $('#days-until').text(Math.round((new Date(2015, 4, 23) - new Date()) / 1000/60/60/24));

  // $.getJSON('http://gramcracker.herokuapp.com/tag/snow', function(data) {
  //   alert(data);
  // });
});