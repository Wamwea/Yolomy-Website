$(document).ready(function() {
    $('.scroll-down-button, #products').on('click', function() {
      $('html, body, #hero').animate({ scrollTop: $('#scroll-to').offset().top}, 500, 'linear');
    });
  });
 
$(document).ready(function(){
    $('#men-checkbox').attr('checked', true).show();
    $("#men-checkbox").on('click', function(){
      $("#men-listing").toggle(700);
    });});

    $(document).ready(function(){
        $('#women-checkbox').attr('checked', true).show();
        $("#women-checkbox").on('click', function(){
          $("#women-listing").toggle(700);
        });});
$(document).ready(function(){

    $("#products-button").on('click',function(){
        $("#men-listing,#women-listing").show(700);
        
        $('#men-checkbox, #women-checkbox').attr('checked', true).show();  
    })
})
