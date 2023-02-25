
                        $(document).ready(function() {
                              let vId = $('.original-selector :selected').val();
                                let preorder_text = $('.preorder-hidden #preorder-'+vId+'').html();
                                $("#preorder-avail").html(preorder_text);
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
                              let preorder_text = $('.preorder-hidden #preorder-'+last_part+'').html();
                              $("#preorder-avail").html(preorder_text);
                              $('.pre-active').parent('#preorder-avail').next().text('Add to Cart');
                          }, 500);
                        });
                        $(document).ready(function(){
                          setTimeout(function() {
                            $('.pre-active').parent('#preorder-avail').next().text('Add to Cart');
                          }, 2000);
                        });
  
