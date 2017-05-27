$(document).ready(function(){

  jQuery("time.timeago").timeago();

  var charCountColor = $('#char-count').css('color');
  $('.tweet-compose').focus(function() {
    var height = 40;
    $(this).css('height', height*2);
    $('#tweet-controls').css('display', 'block');
  });

  $('#tweet-submit').prop('disabled', true);
  $('.stats').css('display', 'none');
  $('.reply').css('display', 'none');
  $('.tweet-actions').css('display', 'none');

  $(document).mouseover(function() {
    $(this).find('.tweet').mouseenter(function() {
      $(this).find('.tweet-actions').fadeIn(500);
      $(this).find('.tweet-actions').addClass('active');
    });

    $(this).find('.tweet').mouseleave(function() {
      $('.tweet-actions.active').fadeOut(0);
    });
  });

  $(document).on('click', function() {
    $(this).find('.tweet').on('click', function() {
      $(this).find('.stats').removeClass('active');
      $(this).find('.reply').removeClass('active');
      $('.stats.active').slideUp(500);
      $('.reply.active').find('.tweet-compose').css('height', 33);
      $(this).find('.stats').slideDown(500);
      $(this).find('.reply').slideDown(500);
      $(this).find('.stats').addClass('active');
      $(this).find('.reply').addClass('active');
    });
  });

  $('#tweet-content').find('.tweet-compose').keyup(function() {
    var maxCount = 140;
    var currentCount = $(this).val().length;
    currentCount = maxCount - currentCount;
    $('#char-count').text(currentCount);
    if (currentCount <= 10) {
      $('#char-count').css('color', 'red');
    }
    else {
      $('#char-count').css('color', charCountColor);
    }
    if (currentCount < 0 || currentCount === 140) {
      $('#tweet-submit').prop('disabled', true);
    }
    else {
      $('#tweet-submit').prop('disabled', false);
    }
  });

  $('#tweet-submit').on('click', function() {
    $('#stream').prepend(function() {
      var tweetClone = $('.tweet').first().clone();
      tweetClone.find('.avatar').attr('src', 'img/alagoon.jpg');
      tweetClone.find('.fullname').html('Jonathan Lowell');
      tweetClone.find('.username').html('@elderlowell');
      tweetClone.find('.tweet-text').html($('#tweet-content').find('.tweet-compose').val());
      tweetClone.find('.tweet-compose').prop('placeholder', 'Reply to @elderlowell');
      tweetClone.find('.num-retweets').html(0);
      tweetClone.find('.num-favorites').html(0);
      tweetClone.find('.time').html(jQuery.timeago(new Date()));
      $('.tweet-compose').val('');
      $('.tweet-compose').css('height', 33);
      $('#tweet-controls').css('display', 'none');
      $('#char-count').text(140);
      return tweetClone;
    });
  });

});
