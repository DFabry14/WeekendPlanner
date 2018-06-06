searchEventful();

function searchEventful() {

    var API_KEY = "4W3gpS4HDcDQZrkP"; 
    // var keywordSearch = $("#keywordInput").val().trim();
    // var dateSearch = $("#date").val().trim();
    var queryURL = "http://api.eventful.com/json/events/search?app_key=" + API_KEY + "&keywords=" +  + "&location=chicago&date=today";
    var proxy = "https://cors-anywhere.herokuapp.com/";
    $.ajax({
        url: proxy + queryURL,
        method: "GET"
    }).then(function (response) {
        var data =JSON.parse(response);
});

}