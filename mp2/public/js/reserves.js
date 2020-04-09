$(document).ready(function() {
    
    var $datePicker = $("div#datepicker");
    
    $datePicker.datepicker({
        changeMonth: false,
        changeYear: false,
        inline: true,
        minDate: "dateToday",
        stepMonths: 0,
        yearRange: new Date().getFullYear().toString() + ':' + new Date().getFullYear().toString(),
        altField: "#datep",
    }).change(function(e){
        setTimeout(function(){   
            $datePicker
                .find('.ui-datepicker-current-day')
                .parent()
                .after('<tr>\n\
                            <td colspan="8">\n\
                                <div> \n\
                                    <button>10:00 am – 11:00 am </button>\n\
                                </div>\n\
                                    <button>11:00 am – 12:00 pm</button>\n\
                                </div>\n\
                                <button>12:00 pm – 1:00 pm</button>\n\
                                </div>\n\
                                <button>6:00 pm – 7:00 pm </button>\n\
                                </div>\n\
                                    <button>7:00 pm – 8:00 pm</button>\n\
                                </div>\n\
                                <button>9:00 pm – 10:00 pm</button>\n\
                                </div>\n\
                            </td>\n\
                    </tr>');

        });
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

});