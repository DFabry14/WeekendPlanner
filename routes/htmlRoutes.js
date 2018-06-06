var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("home");
    });
    
    app.get("/links", function (req, res) {
        res.render("links");
    });

    app.get("/events", function (req, res) {

        // Process incoming post data from the input fields

        // Put final data into an object
        // Pass that object to res.render below after link
        res.render("event-display");
    });
}