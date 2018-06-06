const db = require("../models");

module.exports = function (app) {

    // For UserEvent model:
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

    // For User model:
    app.get('/api/users', (req, res) => db.User
        .findAll({}).then(data => res.json(data)));
    app.post('/api/users', (req, res) => db.User
        .create(req.body).then(data => res.json(data)));

};