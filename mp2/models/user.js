$(document).ready(function() {
    // Adds the student to the parent div given
    // function addStudentDiv(item, parentDiv) {
    //   var rowDiv = document.createElement('div');
    //   var imgCol = document.createElement('div');
    //   var nameCol = document.createElement('div');
  
    //   var img = document.createElement('img');
    //   var nameHeading = document.createElement('h4');
    //   var idnum = document.createElement('p');
  
    //   $(rowDiv).addClass("row student");
    //   $(imgCol).addClass("col-sm-2 center");
    //   $(nameCol).addClass("col-sm-10");
  
    //   $(img).attr("src", item.img);
    //   $(nameHeading).text(item.name);
    //   $(idnum).text(item.id);
  
    //   imgCol.append(img);
  
    //   nameCol.append(nameHeading);
    //   nameCol.append(idnum);
  
    //   rowDiv.append(imgCol);
    //   rowDiv.append(nameCol);
  
    //   parentDiv.append(rowDiv);
    // }
  
  
    // POST called
    $('#addUser').click(function() {
      // Get the data from the form
      var firstName = $('#firstName').val();
      var lastName = $('#lastName').val();
      var email = $('#email').val();
      var psw = $('#psw').val();
      var bio = $('#bio').val();

      var dp = $('#dp').val();
  
    var user = 
    {
    firstName: firstName,
    lastName: lastName,
    email: email, 
    psw: psw,
    bio: bio,
    dp: dp,
    };

      $.post('addUser', newUser, function(data, status) {
        // console.log(data);
    
        if (data.success) {
          $('#msg').text(data.message);
          $('#msg').addClass('success');
    
          $('#firstName').val('');
          $('#lastName').val('');
          $('#email').val('');
          $('#psw').val('');
          $('#bio').val('');
          $('#dp').val('');
        } else {
          $('#msg').text(data.message);
          $('#msg').addClass('fail');
        }
      });
    });

    $(function() {   
      $("btn-success").on("click",function(){  
         $( "#dialog" ).dialog({
            width : 710,
            height : 410,
            modal: true,
            resizable: false,    
            draggable: false,   
         });  
      })
    });
  
    //loginUser POST call
    // $('#loginUser').click(function() {
    //   // Get the data from the form
    //   var email = $('#email').val();
    //   var psw = $('#psw').val();

    //   $.post("/loginUser",{email:email,psw:psw},function(data){
    //     if(data==='done') {
    //         window.location.href="/admin"; }
    //     });
    // });
  });