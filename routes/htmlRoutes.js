var path = require("path");
var axios = require("axios");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("home");
    });

    app.get("/links", function (req, res) {
        res.render("links");
    });

    app.post("/api/savedevents", function(req, res){
        console.log(req.body);
        res.send(200).end();
    })

    app.get("/events/:keyword", function (req, res) {
        var keyword = req.params.keyword;
        var friday = getNextDayOfWeek(new Date(), 5);
        var saturday = getNextDayOfWeek(new Date(), 6);
        var sunday = getNextDayOfWeek(new Date(), 7);

        Promise.all([queryEventfulAPI(keyword, friday), queryEventfulAPI(keyword, saturday), queryEventfulAPI(keyword, sunday)])
            .then(function (response) {
                var fridayEvents = response[0].data.events.event;
                var saturdayEvents = response[1].data.events.event;
                var sundayEvents = response[2].data.events.event;
                var eventObj = {
                    fridayEvents, saturdayEvents, sundayEvents
                }
                console.log(response[0].data.events.event);
                res.render("event-display", eventObj);
            })
    });
    function getNextDayOfWeek(date, dayOfWeek) {
        // got this function from here: https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
        // Code to check that date and dayOfWeek are valid left as an exercise ;)

        var resultDate = new Date(date.getTime());

        resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
        resultDate = JSON.stringify(resultDate).replace(/[-]/g, "").slice(1, 9) + "00";
        return resultDate + "-" + resultDate;
        // Eventful wants the date in this format: https://api.eventful.com/docs/events/search
    }

    function queryEventfulAPI(keyword, date) {
        var API_KEY = "4W3gpS4HDcDQZrkP";
        var queryURL = "http://api.eventful.com/json/events/search?app_key=" + API_KEY + "&keywords=" + keyword + "&location=chicago&date=" + date + "&page_size=10";
        var proxy = "https://cors-anywhere.herokuapp.com/";
        return axios.get(queryURL)
    }
}
