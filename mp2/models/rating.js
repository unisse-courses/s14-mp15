$(document).ready(function() {
  
    // POST called
    $('#addRating').click(function() {
      // Get the data from the form
      var stars = $('#stars').val();
      var comment = $('#comment').val();
  
    var rating = 
    {
    stars: stars,
    comment: comment
    };

      $.post('addRating', newRating, function(data, status) {
        // console.log(data);
    
        if (data.success) {
          $('#msg').text(data.message);
          $('#msg').addClass('success');
    
          $('#stars').val('');
          $('#comment').val('');
        } else {
          $('#msg').text(data.message);
          $('#msg').addClass('fail');
        }
    
      });
    });
  
  });
  