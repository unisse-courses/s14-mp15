$(document).ready(function() {
   
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
          $('#msg').addClass('success');
    
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