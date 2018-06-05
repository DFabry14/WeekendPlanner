searchEventful();

function searchEventful() {

    var API_KEY = "4W3gpS4HDcDQZrkP"; 
    // var keywordSearch = $("#keywordInput").val().trim();
    // var dateSearch = $("#date").val().trim();
    var queryURL = "http://api.eventful.com/json/events/search?app_key=" + API_KEY + "&keywords=music&location=chicago&date=today";
    var proxy = "https://cors-anywhere.herokuapp.com/";
    $.ajax({
        url: proxy + queryURL,
        method: "GET"
    }).then(function (response) {
        var data =JSON.parse(response);
        // console.log(data.events.event[0].title);
        console.log(data);
        for (var i=0; i< 10; i++){
            console.log(data.events.event[i].title)
            console.log(data.events.event[i].city_name)
            console.log(data.events.event[i].description)
            console.log(data.events.event[i].start_time)
            console.log(data.events.event[i].url)

    };
});

}