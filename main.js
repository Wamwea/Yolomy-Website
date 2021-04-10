$(document).ready(function() {
    $('.scroll-down-button, #products').on('click', function() {
      $('html, body, #hero').animate({ scrollTop: $('#scroll-to').offset().top}, 500, 'linear');
    });
  });