$(function() {
  // 「#change-css」要素に対するclickイベントを作成してください
  $('#change-css').click(function() {
    $('#text').css({
      'color': 'red',
      'font-size': '50px'
    });
  });
});
