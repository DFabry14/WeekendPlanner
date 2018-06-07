$(document).ready(function () {

  console.log("connected");

  // ***** Events ***** //
  $("#submit").on("click", function () {

    var keyword = $("#event").val().trim();
    var searchCity = $("#city").val().trim();
    window.location.href="/events/" + keyword;

  })
});



