
(function($){
  $(document).ready(function(){

    $('.carousel').each(function(i,e){
      console.log($(this));
      console.log($(this).find('.carousel-inner'));
      $(this).find('.carousel-inner').slick({
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        prevArrow: $(this).find('.slick-prev'),
        nextArrow: $(this).find('.slick-next'),
        //centerMode: true,
        variableWidth: true,
        infinite: false,
        /*responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              //centerMode: true,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]*/
      });
    });

  });
})(jQuery);
