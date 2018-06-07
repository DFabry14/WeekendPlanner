$(document).ready(function () {

  var keyword = $("#event").val().trim();
  var searchCity = $("#city").val().trim();
  var begin = $("#day-start").val().trim();
  var end = $("#day-end").val().trim();
  var eventsArrayFri = [];
  var eventsArraySat = [];
  var eventsArraySun = [];

  console.log("connected");

  // ***** Events ***** //
  $("#submit").on("click", function () {
    // event.preventDefault();
    
    var API_KEY = "4W3gpS4HDcDQZrkP";
    var queryURL = "http://api.eventful.com/json/events/search?app_key=" + API_KEY + "&keywords=" + keyword + "&location=chicago&date=today&page_size=5";
    var proxy = "https://cors-anywhere.herokuapp.com/";
    $.ajax({
      // Needs to call YOUR API route
      url: proxy + queryURL,
      method: "GET"
    }).then(function (res) {
      var data = JSON.parse(res);
      // console.log("Fri", data);
      for (var i = 0; i < 5; i++) {
        var event = {
          venue: (data.events.event[i].venue_name),
          title: (data.events.event[i].title),
          startTime: (data.events.event[i].start_time),
          url: (data.events.event[i].url)
        }
        eventsArrayFri.push(event);
      };
      for (var j = 0; j < eventsArrayFri.length; j++) {
        $("#event-friday-title" + [j]).text(eventsArrayFri[j].title);
        $("#event-friday-venue" + [j]).text(eventsArrayFri[j].venue);
      };
    });

    var queryURL = "http://api.eventful.com/json/events/search?app_key=" + API_KEY + "&keywords=" + keyword + "&location=chicago&date=" + "2018060600-2018060700" + "&page_size=5";
    var proxy = "https://cors-anywhere.herokuapp.com/";
    $.ajax({
      url: proxy + queryURL,
      method: "GET"
    }).then(function (res) {
      var data = JSON.parse(res);
      // console.log("Sat", data);
      for (var i = 0; i < 5; i++) {
        var event = {
          venue: (data.events.event[i].venue_name),
          title: (data.events.event[i].title),
          startTime: (data.events.event[i].start_time),
          url: (data.events.event[i].url)
        }
        eventsArraySat.push(event);
      };
      for (var j = 0; j < eventsArraySat.length; j++) {
        $("#event-saturday-title" + [j]).text(eventsArraySat[j].title);
        $("#event-saturday-venue" + [j]).text(eventsArraySat[j].venue);
      };
    });

    var queryURL = "http://api.eventful.com/json/events/search?app_key=" + API_KEY + "&keywords=" + keyword + "&location=chicago&date=today&page_size=5";
    var proxy = "https://cors-anywhere.herokuapp.com/";
    $.ajax({
      url: proxy + queryURL,
      method: "GET"
    }).then(function (res) {
      var data = JSON.parse(res);
      // console.log("Sunday", data);
      for (var i = 0; i < 5; i++) {
        var event = {
          venue: (data.events.event[i].venue_name),
          title: (data.events.event[i].title),
          startTime: (data.events.event[i].start_time),
          url: (data.events.event[i].url)
        }
        eventsArraySun.push(event);
      };
      for (var j = 0; j < eventsArraySun.length; j++) {
        // console.log("SunLoop", eventsArraySun[j]);
        $("#event-sunday-title" + [j]).text(eventsArraySun[j].title);
        $("#event-sunday-venue" + [j]).text(eventsArraySun[j].venue);
      };
    })
  });
  
  // ***** jQuery Datepicker ***** //
  var dayStartBtn = $("#day-start");
  var dayEndBtn = $("#day-end");
  var datePicker1 = $(".datepicker-1");
  var datePicker2 = $(".datepicker-2");
  
  datePicker1.datepicker();
  datePicker1.hide();
  
    dayStartBtn.on("click", function () {
    datePicker2.hide();
    // Calendar shows up to default day
    datePicker1.toggle( "fast", function() {
    });
    // Choose day
    // Pull value from day
    // Show calendar for day-end
    // Chose day
    // Pull value from day
  });

  datePicker2.datepicker();
  datePicker2.hide()

  dayEndBtn.on("click", function () {
    datePicker1.hide();
    // Calendar shows up to default day
    datePicker2.toggle( "fast", function() {
    });
    // Choose day
    // Pull value from day
    // Show calendar for day-end
    // Chose day
    // Pull value from day
  });

  $.datepicker.formatDate("D, dd");
});



