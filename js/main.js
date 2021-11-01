jQuery(document).ready(function( $ ) {

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  $(".btn").on('click', function() {
    $(".buttonsuccess").html("Your message has been sent into the void. Thank you!");
  });
  
});
