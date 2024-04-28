'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('../utils/errorHandler');

module.exports = function() {
    let server = express(),
        create,
        start;

    create = function(config, db) {
        let routes = require('./routes');

        // Server settings
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);
        // TODO: узнать как это заменить на то что ниже
        server.use(express.static('public'));
        // server.set('viewDir', config.viewDir);
        // server.set('public', server.get('public'));


        // Returns middleware that parses json
        server.use(cors());
        server.use(errorHandler);
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(cookieParser());
        server.use(logger('dev'));


        // Set up routes
        routes.init(server);
    };

    start = function() {
        let hostname = server.get('hostname'),
            port = server.get('port');

        server.listen(port, function () {
            console.log('Express server listening on - http://' + hostname + ':' + port);
        });
    };

    return {
        create: create,
        start: start
    };
};