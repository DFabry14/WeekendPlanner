const db = require("../models");

module.exports = function (app) {

    app.get('/api/events', (req, res) => db.UserEvent
        .findAll({})
        .then(data => res.json(data)));

    app.post('/api/events', (req, res) => db.UserEvent
        .create(req.body)
        .then(data => res.json(data)));

    app.delete('/api/events/:id', (req, res) => db.UserEvent
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => res.json(data)));

    app.put('/api/events/:id', (req, res) => db.UserEvent
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(data => res.json(data)));

};