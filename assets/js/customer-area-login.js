(function($){
  CUSTOMER_AREA_FORM_SELECTOR = "#customer-area-form .form";
  CUSTOMER_AREA_RESPONSE_SELECTOR = "#customer-area-form .response";
  CUSTOMER_AREA_RESPONSE_FAILURE_SELECTOR = "#customer-area-form .response .failure";

  $(document).ready(function(){
    $(CUSTOMER_AREA_FORM_SELECTOR).submit(function(e){
      e.preventDefault();

      $(CUSTOMER_AREA_RESPONSE_FAILURE_SELECTOR + "," +
        CUSTOMER_AREA_RESPONSE_SELECTOR
      ).delay(1000).show();
      console.log("lol");

      return false;
    });
  });

})(jQuery);
