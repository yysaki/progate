$(function() {
  $('#form').submit(function() {
    // 変数selectValueを定義してください。
    var selectValue = $('#select-form').val();
    
    
    var textValue = $('#text-form').val();
    // 「#output-select」要素のテキストを変数selectValueの値で書き換えてください。
    $('#output-select').text(selectValue);
    
    $('#output-text').text(textValue);
    return false;
  });
});
