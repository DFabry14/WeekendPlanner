
$(document).ready(function() {

  console.log("connected");

  // ***** jQuery Datepicker ***** //
  var dayStartBtn = $("#day-start");
  var dayEndBtn = $("#day-end");
  var datePicker1 = $(".datepicker-1");
  var datePicker2 = $(".datepicker-2");

  datePicker1.datepicker();
  datePicker1.hide();

  dayStartBtn.on("click", function () {
    // Calendar shows up to default day
    console.log("clicked!");
    datePicker1.toggle( "fast", function() {
    });
    // Choose day
    // Pull value from day
    // Show calendar for day-end
    // Chose day
    // Pull value from day
  });
});