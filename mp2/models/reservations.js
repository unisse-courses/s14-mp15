$(document).ready(function() {

    // POST Called
    $('#checkReservations').click(function() {
        // Gets the Date and timeslot of reservation
        var date = $('#date').val();
        var timeslot = $('#timeslot').val();

        $.post('checkReservations', newReservation, function(data, status) {
            if (data.success) {
                $('#msg').text(data.message);
                $('#msg').addClass('success');
                
                console.log("post checkReservations success");

                $('#pax').val('');
            } else {
                $('#msg').text(data.message);
                $('#msg').addClass('fail');
            }
        });

    });

});