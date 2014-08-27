$(function () {
    $('#days-until').text(Math.round((new Date(2015, 4, 23) - new Date()) / 1000/60/60/24));    
});
