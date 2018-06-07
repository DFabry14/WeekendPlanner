$(document).ready(function () {

  var keyword = $("#event").val().trim();
  var searchCity = $("#city").val().trim();

  console.log("connected");

  // ***** Events ***** //
  $("#submit").on("click", function () {

    var keyword = $("#event").val().trim();
    var searchCity = $("#city").val().trim();
    var begin = $("#day-start").val().trim();
    var end = $("#day-end").val().trim();
    window.location.href="/events/" + keyword;

  })
});



