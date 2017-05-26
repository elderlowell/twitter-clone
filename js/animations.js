$(document).ready(function(){
  var maxCount = 140;

  $('#char-count').hide();
  $('#tweet-submit').hide();

  $('.tweet-compose').on('focus',  function() {
    $('#char-count').show();
    $('#tweet-submit').show();
  });

  $('.tweet-compose').on('blur',  function() {
    var currentCount = $(this).val().length;
    if (currentCount === 0) {
      $('#char-count').hide();
      $('#tweet-submit').hide();
    }
  });

  $('.tweet-compose').keyup(function() {
    var currentCount = $(this).val().length;
    currentCount = maxCount - currentCount;
    $('#char-count').text(currentCount);
    if (currentCount <= 10) {
      $('#char-count').css('color', 'red');
    }
    if (currentCount > 10) {
      $('#char-count').css('color', 'inherit');
    }
    if (currentCount > 140) {
      $('#tweet-submit').prop('disabled', true);
    }
  });


});
