$(document).ready(function() {
   
    function sweetalertclick(){
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
              swal("Deleted!", "Your imaginary file has been deleted!", "success");
            }
          });
    };

});