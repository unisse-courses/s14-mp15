$(document).ready(function() {
   
    // POST called
    $('#addReservation').click(function() {
      // Get the data from the form
      var pax = parseInt($('#pax').val());

      var date = ($('#date').val());

      var timeslot = $('#timeslot').val();

      console.log(pax, date, timeslot);
    var reservation = 
    {
      pax: pax,
      date: date,
      timeslot: timeslot, 

    };

      $.post('addReservation', newReservation, function(data, status) {
         console.log(data);
    
         if (data.success) {
          $('#msg').text(data.message);
          $('#msg').addClass('success');
    
          $('#pax').val('');
          $('#date').val('');
          $('#timeslot').val('');
        } else {
          $('#msg').text(data.message);
          $('#msg').addClass('fail');
        }
      });


      
    });
  });