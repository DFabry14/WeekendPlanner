var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("home");
    });
    
    app.get("/links", function (req, res) {
        res.render("links");
    });

    app.get("/events", function (req, res) {
        res.render("event-display");
    });
}