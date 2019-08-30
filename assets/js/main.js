(function($){
  $(document).ready(function(){

    //info overlay
    $("#info-open-trigger").click(function(){
      $("#info-wrapper").fadeIn();
    });
    $("#info-close-trigger").click(function(){
      $("#info-wrapper").fadeOut();
    });

  })
})(jQuery);
