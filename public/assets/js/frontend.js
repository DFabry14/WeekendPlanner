$(document).ready(function () {

  console.log("connected");

  var errorInput = $(".error-input") ;
  errorInput.hide();
  var eventInput = $("#event");

  // ***** Events ***** //
  $("#submit").on("click", function () {
    if (eventInput.val().trim() == '') {
      errorInput.fadeIn("fast");
      console.log("empty field!");
      return;
    }
    
    var keyword = $("#event").val().trim();
    var searchCity = $("#city").val().trim();
    window.location.href="/events/" + keyword;

  });

});


