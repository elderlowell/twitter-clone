$(document).ready(function(){
  var maxCount = 140;

  $('#char-count').hide();
  $('#tweet-submit').hide();

  $('.tweet-compose').focus(function() {
    var height = 25;
    $(this).css('height', height*2);
    $('#char-count').show();
    $('#tweet-submit').show();
  });

  // $('.tweet-compose').blur(function() {
  //   $(this).css('height', 25);
  //   var currentCount = $(this).val().length;
  //   if (currentCount === 0) {
  //     $('#char-count').hide();
  //     $('#tweet-submit').hide();
  //   }
  // });

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
    if (currentCount < 0) {
      $('#tweet-submit').prop('disabled', true);
    }
    if (currentCount >= 0) {
      $('#tweet-submit').prop('disabled', false);
    }
  });

  $('#tweet-submit').on('click', function insertTweet() {
    $('#stream').prepend(function() {
      var tweetClone = $('.tweet').first().clone();
      tweetClone.find('.avatar').attr('src', 'img/alagoon.jpg');
      tweetClone.find('.fullname').html('Jonathan Lowell');
      tweetClone.find('.username').html('@elderlowell');
      tweetClone.find('.tweet-text').html($('.tweet-compose').val());
      $('.tweet-compose').val('');
      $('.tweet-compose').css('height', 25);
      return tweetClone;
    });
  });



});
