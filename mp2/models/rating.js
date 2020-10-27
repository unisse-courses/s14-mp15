$(document).ready(function() {
    // Adds the rating to the parent div
    function addCommentsDiv(reviews, parentDiv) {
      var rowDiv = document.createElement('div');
      // var imgCol = document.createElement('div');
      var nameCol = document.createElement('div');
  
      // var img = document.createElement('img');
      var comment = document.createElement('h4');
      var stars = document.createElement('p');
  
      $(rowDiv).addClass("comment");
      // $(imgCol).addClass("col-sm-2 center");
      $(nameCol).addClass("row");
  
      // $(img).attr("src", item.img);
      $(comment).text(reviews.comment);
      $(stars).text(reviews.stars);
  
      // imgCol.append(img);
  
      nameCol.append(comment);
      nameCol.append(stars);
  
      // rowDiv.append(imgCol);
      rowDiv.append(nameCol);
  
      parentDiv.append(rowDiv);
    }
  
  
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
  
    // //loginUser POST call
    // $('#loginUser').click(function() {
    //   // Get the data from the form
    //   var email = $('#email').val();
    //   var psw = $('#psw').val();

    //   $.post('loginUser', function(data, status) {
    //     // console.log(data);

    //     if(data.success) {
    //         // $('#msg').text(data.message);
    //         // $('#msg').addClass('success');

    //         window.location.assign("/menu")

            
    //     } else {
    //         // $('#msg').text(data.message);
    //         // $('#msg').addClass('fail');

    //         window.location.assign("/login")
    //     }
  
    //   });
    // });
  });
  