'use strict';

const apiRoute = require('./apis');
const homeRoute = require('./home');

function init(server) {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });

    server.post('*', function (req, res) {
        res.status(405)
    });

    server.delete('*', function (req, res) {
        res.status(405)
    });

    server.put('*', function (req, res) {
        res.status(405)
    });


    server.use('/api', apiRoute);
    server.use('/', homeRoute);
    // server.use('/error', errorRoute);
}

module.exports = {
    init: init
};