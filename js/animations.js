$(document).ready(function(){
  $('#char-count').hide();
  $('#tweet-submit').hide();

  $('.tweet-compose').on('focus',  function() {
    $('#char-count').show();
    $('#tweet-submit').show();
  });

  $('.tweet-compose').on('blur',  function() {
    $('#char-count').hide();
    $('#tweet-submit').hide();
  });
});
