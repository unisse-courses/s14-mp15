$(document).ready(function() {
    
    var $datePicker = $("div#datepicker");

    //var $datePicker = $("div");

    $datePicker.datepicker({
        changeMonth: false,
        changeYear: false,
        inline: true,
        minDate: "dateToday",
        stepMonths: 0,
        yearRange: new Date().getFullYear().toString() + ':' + new Date().getFullYear().toString(),
        altField: "#datep",
    });
    $datePicker.change(function(e){
        setTimeout(function(){   
            $datePicker
                .find('.ui-datepicker-current-day')
                .parent()
                .after('<tr>\n\
                            <td colspan="8">\n\
                                </div>\n\
                                    <button class="btnFirst">11:00 am – 12:00 pm</button>\n\
                                </div>\n\
                                <button class="btnSecond">12:00 pm – 1:00 pm</button>\n\
                                </div>\n\
                                <button class="btnThird">6:00 pm – 7:00 pm </button>\n\
                                </div>\n\
                                    <button class="btnFourth">7:00 pm – 8:00 pm</button>\n\
                                </div>\n\
                            </td>\n\
                    </tr>');

        });
    });

    $("#datepicker").on("change",function(){
        var selected = $(this).val();
        //Call the /checkReservations from index.js
    });
    


    $('.form-control').each(function () {
        floatedLabel($(this));
    });

    $('.form-control').on('input', function () {
        floatedLabel($(this));
    });

    function floatedLabel(input) {
        var $field = input.closest('.form-group');
        if (input.val()) {
            $field.addClass('input-not-empty');
        } else {
            $field.removeClass('input-not-empty');
        }
    }
    
    var year = new Date().getFullYear();
    
    var d = new Date();
    var month = new Array();
    month[0] = "01";
    month[1] = "02";
    month[2] = "03";
    month[3] = "04";
    month[4] = "05";
    month[5] = "06";
    month[6] = "07";
    month[7] = "08";
    month[8] = "09";
    month[9] = "10";
    month[10] ="11";
    month[11] = "12";

    document.getElementById('date').setAttribute("min", year + "-" + month[d.getMonth()]+ "-01");
    document.getElementById('date').setAttribute("max", year + "-" + month[d.getMonth()]+ "-30");
    /*Change max day to 30/31 depending on month */
    

     // POST called
     $('#addReservation').click(function() {
        // Get the data from the form
        var timeslot = $('#timeslot').val();
  
        var date = ($('#date').val());
  
  
        var pax = parseInt($('#pax').val());
        console.log(date,adult,children);
      var reservation = 
      {
      date: date,
      pax: pax,
      timeslot: timeslot, 
  
      };

        $.post('addReservation', newReservation, function(data, status) {
           console.log(data);
      
          if (data.success) {
            $('#msg').text(data.message);
            $('#msg').addClass('activated reserves.js');
      
            $('#date').val('');
            $('#adult').val('');
            $('#children').val('');
            $('#timeslot').val('');
          } else {
            $('#msg').text(data.message);
            $('#msg').addClass('fail');
          }
        });
  
  
        
      });

});