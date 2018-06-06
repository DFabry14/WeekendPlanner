var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("event-display");
    });
    
    app.get("/links", function (req, res) {
        res.render("links");
    });
}