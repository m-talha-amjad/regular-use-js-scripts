
                        $(document).ready(function() {
                              let vId = $('.original-selector :selected').val();
                        });
                        $(".option-selector-fieldset").on( "click", ".opt-btn", function() {
                            setTimeout(function() {
                              var url = $(location).attr('href'),
                              parts = url.split("?variant="),
                              last_part = parts[parts.length-1];
                              if ($.isNumeric(last_part)) {
                                  last_part = last_part;
                              }
                              else {
                                last_part = $('.original-selector :selected').val();
                              }
                          }, 500);
                        });
  
