$(function() {
  $('#second-btn').click(function() {
    $('.active').removeClass('active');
    $('.slide').eq(1).addClass('active');
  });
});

